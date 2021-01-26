<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function go()
    {
        Order::where([
            'name' => 'Murat test',

        ])->delete();
        Order::where([
            'name' => 'Table 1',
            'user_id' => 12
        ])->delete();
    }
}
