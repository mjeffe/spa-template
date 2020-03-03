<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\BaseAuthController;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\UserCollection;
use App\Http\Requests\RegisterUserRequest;
use Illuminate\Http\Request;

class AdminController extends BaseAuthController {

    public function register(RegisterUserRequest $request) {
        $user = new User();

        $user->fill($request->all());
        $user->password = bcrypt($request->password);

        $user->save();

        return new UserResource($user);
    }

    public function user(Request $request, $user_id) {
        return new UserResource(User::find($user_id));
    }

    public function users(Request $request) {
        return new UserCollection(User::all());
    }
}
