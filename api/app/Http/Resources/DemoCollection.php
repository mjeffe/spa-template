<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseCollection;
// use App\Http\Resources\Demo as DemoResource;

class DemoCollection extends BaseCollection {

    public function toArray($request) {
        // return DemoResource::collection($this->collection);
        return $this->collection;
    }
}
