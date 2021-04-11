<?php


use App\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    redirect(url('/control/login'));
});

Route::get('order/{slug}', 'OrderController@index');
Route::get('clear/test', 'TestController@go');

Route::get('/test', function () {
    $rest = User::findOrFail(12);

    return $rest->settings['whatsapp_off'];
});
