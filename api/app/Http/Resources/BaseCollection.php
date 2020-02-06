<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class BaseCollection extends ResourceCollection {
    public function toArray($request) {
        return parent::toArray($request);
    }

    public function with($request) {
        return [
            'api_version' => 'v1',
        ];
    }
}
