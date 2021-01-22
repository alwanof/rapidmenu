<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index($slug)
    {
        $order = Order::withoutGlobalScope('ref')->where('slug', $slug)->firstOrFail();
        return view('order', compact(['order']));
    }
}
