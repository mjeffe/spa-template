<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BaseResource extends JsonResource {

    public function toArray($request) {
        return parent::toArray($request);
    }

    public function with($request) {
        return [
            'api_version' => 'v1',
        ];
    }
}
