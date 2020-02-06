<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
| NOTE: all api routes are prefixed with : /v1
| This is defined in the RouteServiceProvider api group
*/


Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {
    Route::get('users', 'AdminController@users');
    Route::post('register', 'AdminController@register');
});
