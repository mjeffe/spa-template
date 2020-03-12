<?php

namespace Tests\Feature\Esr;

use Tests\BaseTestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use App\Models\Esr;

class InstitutionTest extends BaseTestCase {

    use DatabaseMigrations;

    // generate an entire institution's worth of rows. That is, multiple
    // degrees, each with multiple cip2s, each with multiple cip4s
    //
    // builds institution with 2 degrees, each with 2 cip2s, each with either 1
    // or 3 cip4s, for a total of 8 rows in the table.
    //
    // Note that this function can't guarantee that the objects it creates will
    // be unique. That is, it could create a second degree that happens to be
    // the same as the first. HOWEVER, the Esr factory does use Faker's
    // unique() function so hopefully, it all works correctly.
    protected function buildInstitution() {
        // the first row gives us our instititution
        $base = factory(Esr::class)->create();

        // create some stuff for that degree
        $tmp = $this->buildCip2([
            'fice_code' => $base->fice_code,
            'institution' => $base->institution,
            'degree' => $base->degree,
        ]);

        // create some stuff for a new degree
        $tmp2 = $this->buildDegree([
            'fice_code' => $base->fice_code,
            'institution' => $base->institution,
        ]);

        return $base->fice_code;
    }

    // create a degree for the given fice
    protected function buildDegree($overrides) {
        $tmp = factory(Esr::class)->create($overrides);

        return $this->buildCip2([
            'fice_code' => $tmp->fice_code,
            'institution' => $tmp->institution,
            'degree' => $tmp->degree,
        ]);
    }

    // create a cip2 for the given fice/degree
    protected function buildCip2($overrides) {
        $tmp = factory(Esr::class)->create($overrides);

        return $this->buildCip4s([
            'fice_code' => $tmp->fice_code,
            'institution' => $tmp->institution,
            'degree' => $tmp->degree,
            'cip_2' => $tmp->cip_2,
            'cip_category' => $tmp->cip_category
        ]);
    }

    // create a few cip4s for the given fice/degree/cip2
    protected function buildCip4s($overrides) {
        return factory(Esr::class, 2)->create($overrides);
    }

    // ----------------------------------------------------------------------

    /** test */
    public function test_buildInstitution_helper() {
        $fice_code = $this->buildInstitution();

        $rows = DB::table('esr')->where('fice_code', $fice_code)->count();

        $this->assertEquals(8, $rows);
    }

    /** @test */
    public function it_returns_all_expected_data_created_by_the_buildInstitution_helper() {
        // NOTE: this test's counts are related to the buildInstitution()
        // helper. If that changes, this needs to as well.
        $fice_code = $this->buildInstitution();

        $response = $this->apiGet('/esr/institution/' . $fice_code);
        $data = $this->unwrap($response);

        $this->assertEquals($fice_code, $data['fice_code']);
        // 2 degrees
        $this->assertEquals(2, count($data['degrees']));

        foreach ($data['degrees'] as $degree) {
            // each should have 2 cip2s
            $this->assertEquals(2, count($degree['cip_2s']));

            foreach ($degree['cip_2s'] as $cip2) {
                // each cip2 should have either 1 or 3 cip4s
                $result = ((count($cip2['cip_4s']) === 1) || (count($cip2['cip_4s']) === 3));
                $this->assertTrue($result);
            }
        }
    }
    /** @test */
    public function it_returns_an_institutions_esr_data() {
        $esr = factory(Esr::class)->create();

        $response = $this->apiGet('/esr/institution/' . $esr->fice_code);

        // dd($this->unwrap($response));
        $response->assertStatus(200);
        $this->assertGreaterThan(2, $this->unwrap($response));
    }

    /** @test */
    public function it_returns_the_correct_institution() {
        $esr = factory(Esr::class)->create();

        $response = $this->apiGet('/esr/institution/' . $esr->fice_code);
        $data = $this->unwrap($response);

        $this->assertEquals($esr->fice_code, $data['fice_code']);
        $this->assertEquals($esr->institution, $data['institution']);
    }

    /** @test */
    public function it_returns_an_institutions_esr_data_in_the_expected_structure() {
        $esr = factory(Esr::class)->create();

        $response = $this->apiGet('/esr/institution/' . $esr->fice_code);

        $response->assertJsonStructure(['data' => [
            'fice_code',
            'institution',
            'degrees' => [
                [
                    'degree',
                    'degree_desc',
                    'cip_2s' => [
                        [
                            'cip_2',
                            'cip_2_desc',
                            'cip_4s' => [
                                [
                                    'cip_4',
                                    'cip_4_desc',
                                    'graduates',
                                    'pct_employed',
                                    'avg_first_year_wages',
                                    'pct_full_time',
                                    'avg_first_year_full_time_wages'
                                ],
                            ]
                        ],
                    ]
                ],
            ]
        ]]);
    }

}
