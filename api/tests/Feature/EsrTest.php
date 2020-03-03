<?php

namespace Tests\Feature;

use Tests\BaseTestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EsrTest extends BaseTestCase {

    private $fice = '001092';  // UCA

    /** @test */
    public function it_returns_an_institutions_esr_data() {
        $response = $this->apiGet('/esr/institution/' . $this->fice);

        $response->assertStatus(200);
        $this->assertGreaterThan(2, $this->unwrap($response));
    }

    /** @test */
    public function it_returns_institutions_with_expected_fields() {
        $response = $this->apiGet('/esr/institution/' . $this->fice);

        $response->assertJsonStructure(['data' => [[
            'fice_code',
            'institution',
            'degree',
            'cip_2',
            'cip_2_desc',
            'cip_4',
            'cip_4_desc',
            'graduates',
            'employed_pct',
            'avg_first_year_wages',
            'full_time_pct',
            'avg_first_year_full_time_wages'
        ]]]);
    }
}