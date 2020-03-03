<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase;

abstract class BaseTestCase extends TestCase {
    use CreatesApplication;

    protected $baseUrl = '/v1';

    public function setUp() : void {
        parent::setUp();
    }

    protected function unwrap($response) {
        return $response->json()['data'];
    }

    protected function apiGet($url) {
        return $this->get($this->baseUrl . $url);
    }
    protected function apiPut($url, $data) {
        return $this->json('PUT', $this->baseUrl . $url, $data);
    }
    protected function apiPost($url, $data) {
        return $this->json('POST', $this->baseUrl . $url, $data);
    }
}
