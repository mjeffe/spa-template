<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demo;
use App\Http\Controllers\BaseController;
use App\Http\Resources\Demo as DemoResource;
use App\Http\Resources\DemoCollection;

class DemoController extends BaseController {
    public function institutions(Request $request) {
        return new DemoCollection($this->demoData());
    }

    public function institution(Request $request, $ficeCode) {
        return new DemoResource($this->demoData($ficeCode));
    }

    // simple stand in for calling some service
    protected function demoData($ficeCode = null) {
        return ($ficeCode)
            ? Demo::where('fice_code', $ficeCode)->first()
            : Demo::orderBy('institution', 'asc')->get();
    }

}
