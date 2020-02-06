<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BaseRequest extends FormRequest {
    /**
     * We do not want to do authorization here, so just return true
     */
    public function authorize() {
        return true;
    }

    /**
     * Return errors formated in our API's standard format
     */
    public function formatErrors(Validator $validator) {
        return [
            'error' => true,
            'code' => 422,
            'message' => 'Validation Errors',
            'data' => $validator->errors()->jsonSerialize()
        ];
    }
}
