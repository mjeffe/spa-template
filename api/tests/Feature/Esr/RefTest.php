<?php

namespace Tests\Feature\Esr;

use Tests\BaseTestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RefTest extends BaseTestCase {

    /** @test */
    public function it_returns_institutions() {
        $response = $this->apiGet('/esr/ref/institutions');

        $response->assertStatus(200);
        $this->assertGreaterThan(2, $this->unwrap($response));
    }

    /** @test */
    public function it_returns_institutions_with_specific_institution_ref_structure() {
        $response = $this->apiGet('/esr/ref/institutions');

        $response->assertJsonStructure(['data' => [['value', 'text', 'institution_years']]]);
    }

    /** @test */
    public function it_returns_degrees() {
        $response = $this->apiGet('/esr/ref/degrees');

        $response->assertStatus(200);
        $this->assertGreaterThan(2, $this->unwrap($response));
    }

    /** @test */
    public function it_returns_degrees_with_generic_ref_structure() {
        $response = $this->apiGet('/esr/ref/degrees');

        $response->assertJsonStructure(['data' => [['value', 'text']]]);
    }

    /** @test */
    public function it_returns_majors() {
        $response = $this->apiGet('/esr/ref/majors');

        $response->assertStatus(200);
        $this->assertGreaterThan(2, $this->unwrap($response));
    }

    /** @test */
    public function it_returns_majors_with_generic_ref_structure() {
        $response = $this->apiGet('/esr/ref/majors');

        $response->assertJsonStructure(['data' => [['value', 'text']]]);
    }

}
