<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\EsrInstitution;
use App\Http\Resources\RefCollection;
use App\Http\Resources\RefInstitutions;
use App\Http\Controllers\BaseController;

class RefController extends BaseController {
    public function institutions() {
        return RefInstitutions::collection(
            EsrInstitution::select('fice_code as value', 'institution as text', 'institution_years')
                ->distinct()
                ->where('reporting_level', 3)
                ->orderBy('institution_years')->orderBy('institution')
                ->get()
        );
    }

    public function degrees() {
        return new RefCollection(
            EsrInstitution::select('degree as value', 'degree as text')
                ->distinct()
                ->where('reporting_level', 3)
                ->get()
        );
    }

    public function majors() {
        return new RefCollection(
            EsrInstitution::select(DB::raw("cip_2 || '.' || cip_4 as value, cip_detail as text"))
                ->distinct()
                ->where('reporting_level', 3)
                ->get()
        );
    }

}
