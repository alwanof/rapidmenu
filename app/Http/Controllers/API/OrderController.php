<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function save(Request $request)
    {
        $data = $request->all();
        return response($data, 200);
    }
}
