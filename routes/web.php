<?php

use App\Parse\Stream;

use Illuminate\Support\Facades\Config;
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
    return view('welcome');
});

Route::get('/test', function () {
    $stream = Stream::create([
        'pid' => 1,
        'model' => 'Order',
        'action' => 'C',
        'meta' => ['hash' => 'foo']
    ]);
});
