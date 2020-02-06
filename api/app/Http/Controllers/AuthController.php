<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\BaseController;
use App\Http\Resources\UserCollection;
use App\Http\Requests\RegisterUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController {

    public function login(Request $request) {
        $credentials = $request->only('email', 'password');
        if ($token = Auth::guard()->attempt($credentials)) {
        	return $this->respondWithToken($token);
        }

		return $this->respondWithError('Invalid login credentials');
    }

    public function logout() {
        Auth::guard()->logout();

        return response()->json([
            'status' => 'success',
            'data' => [
                'msg' => 'Logged out Successfully.'
            ]
        ], 200);
    }

    public function user(Request $request) {
        $user = User::find(Auth::user()->id);

        return response()->json([
            'status' => 'success',
            'data' => [
                'user' => $user
            ],
        ]);
    }

    // refresh jwt token
    public function refresh() {
        if ($token = Auth::guard()->refresh()) {
        	return $this->respondWithToken($token);
        }

		return $this->respondWithError('Unable to refresh token');
    }

    // arbitrary response array structure
    protected function respondWithToken($token) {
        return response()->json([
            'status' => 'success',
            'data' => [
                'token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
            ],
        ], 200);
    }

    protected function respondWithError(String $message, Array $errors = []) {
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'errors' => $errors
        ], 401);
    }
}
