<?php

namespace App\Http\Resources;

use App\Http\Resources\BaseResource;

class User extends BaseResource {

    public function toArray($request) {
        return [
            'id' => $this->id,
            'fname' => $this->fname,
            'lname' => $this->lname,
            'email' => $this->email,
        ];
    }
}
