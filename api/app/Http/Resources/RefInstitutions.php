<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseResource;

class RefInstitutions extends BaseResource {

    public function toArray($request) {
        return [
            'value' => $this->value,
            'text' => $this->text,
            'institution_years' => $this->institution_years,
        ];
    }
}
