<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| These routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group.
|
| All api routes are prefixed with '/v1'
| This is defined in the RouteServiceProvider api group
*/

/*
|--------------------------------------------------------------------------
| login/logout and token refresh routes
|--------------------------------------------------------------------------
*/
Route::prefix('auth')->group(function () {
    Route::post('login', 'AuthController@login');

    Route::middleware('auth:api')->group(function () {
        Route::get('refresh', 'AuthController@refresh');
        Route::get('user', 'AuthController@user');
        Route::get('logout', 'AuthController@logout');
    });
});

/*
|--------------------------------------------------------------------------
| Admin routes
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'admin', 'middleware' => ['auth:api', 'admin']], function () {
    Route::get('users', 'AdminController@users');
    Route::post('register', 'AdminController@register');
});

/*
|--------------------------------------------------------------------------
| Demo routes
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'demo'], function () {
    Route::get('institution', 'DemoController@institutions');
    Route::get('institution/{id}', 'DemoController@institution');
});

