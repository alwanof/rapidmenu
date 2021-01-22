<?php

namespace App\Http\Controllers\API;

use App\Driver;
use App\Http\Controllers\Controller;
use App\Order;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    public function save(Request $request)
    {

        $this->validate($request, [
            'restID' => 'required',
            'indoor' => 'required|min:0|max:1',
            'name' => 'required|string',
            'phone' => 'required',
            'address' => 'required',
            'dist' => 'required',
            'aprt' => 'required',
            'house' => 'required',
            'lat' => 'required',
            'lng' => 'required',
            'total' => 'required',
            'items' => 'required',
        ]);


        $rest = User::findOrFail($request->restID);

        $order = new Order();
        $order->slug = Str::random(24);
        $order->name = $request->name;
        $order->email = $request->email ?? null;
        $order->phone = $request->phone;
        $order->address = $request->address;
        $order->dist = $request->dist;
        $order->aprt = $request->aprt;
        $order->house = $request->house;
        $order->bell = $request->bell ?? null;
        $order->lat = $request->lat;
        $order->lng = $request->lng;
        $order->total = $request->total;
        $order->status = 0;
        $order->note_a = $request->note ?? null;
        $order->user_id = $rest->id;
        $order->parent = $rest->parent_id;

        $order->save();
        $items = explode('#', $request->items);
        //https://wa.me/905373306613?text=hello%20word%0Afrom%20murad
        $orderText = '';
        foreach ($items as $item) {
            $item = explode('@', $item);
            $orderText = $orderText . $item[0] . '# ' . $item[1] . '[' . $item[2] . ']' . "%0A";
        }
        $addressText = ($request->indoor == 0) ? "📍 $request->address /B:$request->aprt D:$request->house 🔔 $order->bell" : null;
        $mapLink = ($request->indoor == 0) ? "https://maps.google.com/local?q=$order->lat,$order->lng" : null;
        $msg = "From: $request->name [$request->dist]. %0A I want followig: %0A $orderText %0A $addressText %0A -------- %0A $order->note_a %0A $mapLink";
        //$msg = "from:" . $this->strim($request->name) . "%0A" . $this->strim($request->dist);
        return response($this->strim($msg), 200);
    }

    public function driverOrder($hash)
    {
        $driver = Driver::where('hash', $hash)->firstOrFail();
        $pendingOrder = Order::where([
            'driver_id' => $driver->id,
            'status' => 12
        ]);
        if ($pendingOrder->count() > 0) {
            return $pendingOrder->first();
        }

        $newOrder = Order::where([
            'driver_id' => $driver->id,
            'status' => 1
        ]);
        if ($newOrder->count() > 0) {
            return $newOrder->first();
        }

        return false;
    }

    private function strim($text)
    {
        return str_replace(" ", "%20", $text);
    }
}
