<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Authentication Routes
|--------------------------------------------------------------------------
|
| NOTE: all api routes are prefixed with : /v1
| This is defined in the RouteServiceProvider api group
*/


Route::prefix('auth')->group(function () {
    Route::post('login', 'AuthController@login')->middleware('bindings');

    Route::middleware('auth:api')->group(function () {
        Route::get('refresh', 'AuthController@refresh');
        Route::get('user', 'AuthController@user');
        Route::get('logout', 'AuthController@logout');
    });
});
