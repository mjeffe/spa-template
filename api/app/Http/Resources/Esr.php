<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseResource;

class Esr extends BaseResource {

    public function toArray($request) {
        return [
            'fice_code' => $this->fice_code,
            'institution' => $this->institution,
            'degree' => $this->degree,
            'cip_2' => $this->cip_2,
            'cip_2_desc' => $this->cip_category,
            'cip_4' => $this->cip_4,
            'cip_4_desc' => $this->cip_detail,
            'graduates' => $this->graduates,
            'employed_pct' => $this->employed_pct,
            'avg_first_year_wages' => $this->avg_first_year_wages,
            'full_time_pct' => $this->full_time_pct,
            'avg_first_year_full_time_wages' => $this->avg_first_year_full_time_wages,
        ];
    }
}
