<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Esr;
use App\Http\Controllers\BaseController;

use App\Http\Resources\EsrInstitution;

class EsrController extends BaseController {
    public function institution(Request $request, $ficeCode) {
        return new EsrInstitution(
            Esr::where('fice_code', $ficeCode)
                ->orderBy('degree', 'asc')
                ->orderBy('cip_category', 'asc')
                ->orderBy('cip_detail', 'asc')
                ->get()
        );
    }
}
