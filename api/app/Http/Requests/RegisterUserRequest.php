<?php

namespace App\Http\Requests;

use App\Http\Requests\BaseRequest;
use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends BaseRequest {
    public function rules() {
        return [
            'fname' => 'required|min:3',
            'lname' => 'required|min:3',
            'email' => 'required|email|unique:users',
            'password'  => 'required|min:4|confirmed',
        ];
    }

    public function messages() {
        return [
            'email.unique' => 'The e-mail address is already in use',
        ];
    }
}
