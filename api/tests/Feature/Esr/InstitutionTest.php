<?php

namespace Tests\Feature\Esr;

use Tests\BaseTestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\RefreshDatabase;

class InstitutionTest extends BaseTestCase {

    private $fice = '001092';  // UCA

    /** @test */
    public function it_returns_an_institutions_esr_data() {
        $response = $this->apiGet('/esr/institution/' . $this->fice);

        // dd($this->unwrap($response));
        $response->assertStatus(200);
        $this->assertGreaterThan(2, $this->unwrap($response));
    }

    /** @test */
    public function it_returns_an_institutions_esr_data_in_the_expected_structure() {
        $response = $this->apiGet('/esr/institution/' . $this->fice);

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
