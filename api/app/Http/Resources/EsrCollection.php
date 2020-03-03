<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseCollection;
use App\Http\Resources\Esr as EsrResource;

class EsrCollection extends BaseCollection {

    public function toArray($request) {
        return EsrResource::collection($this->collection);
    }
}
