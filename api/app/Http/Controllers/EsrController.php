<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\EsrInstitution;
use App\Http\Resources\EsrCollection;
use App\Http\Resources\Esr as EsrResource;
use App\Http\Controllers\BaseController;

class EsrController extends BaseController {

    public function institution(Request $request, $ficeCode) {
        return new EsrCollection(
            EsrInstitution::where('fice_code', $ficeCode)->get()
        );
    }
}
