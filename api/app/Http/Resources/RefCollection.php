<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseCollection;
use App\Http\Resources\Ref as RefResource;

class RefCollection extends BaseCollection {

    public function toArray($request) {
        return RefResource::collection($this->collection);
    }
}
