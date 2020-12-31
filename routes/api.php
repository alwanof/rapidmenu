<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => '/v1'], function () {
    Route::get('categories', 'API\CategoryController@index');
    Route::get('categories/{id}/items', 'API\CategoryController@categoryItems');
    Route::get('items', 'API\ItemController@index');
    Route::get('items/{id}', 'API\ItemController@show');
    Route::get('item/search', 'API\ItemController@search');
    Route::get('qrcode/{qr}', 'API\ThreadController@index');
});
