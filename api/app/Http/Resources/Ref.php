<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseResource;

class Ref extends BaseResource {

    public function toArray($request) {
        return [
            'value' => $this->value,
            'text' => $this->text,
        ];
    }
}
