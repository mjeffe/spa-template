<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseCollection;
use App\Http\Resources\User as UserResource;

class UserCollection extends BaseCollection {

    public function toArray($request) {
        return UserResource::collection($this->collection);
    }
}
