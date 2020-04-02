<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demo;
use App\Http\Controllers\BaseController;
use App\Http\Resources\DemoResource;
use App\Http\Resources\DemoCollection;

class DemoController extends BaseController {
    public function institutions(Request $request) {
        return new DemoCollection(
            $this->demoData()
        );
    }

    public function institution(Request $request, $ficeCode) {
        return new DemoResource(
            $this->demoData($ficeCode)
        );
    }

    protected function demoData($ficeCode = null) {
        $data = Demo::orderBy('degree', 'asc')
            ->orderBy('cip_category', 'asc')
            ->orderBy('cip_detail', 'asc');

        if ($ficeCode) {
            $data->where('fice_code', $ficeCode);
        }

        return $data->get();
    }

}
