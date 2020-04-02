<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseResource;

class Demo extends BaseResource {

    public function toArray($request) {
        return [
            'ficeCode' => $this->fice_code,
            'institution' => $this->institution,
            'institutionYears' => $this->institution_years,
        ];
    }
}
