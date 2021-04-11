<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Slider;
use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\SliderResource;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $slug = ($request->input('user')) ? $request->input('user') : null;
        $user = User::where('slug', '=', $slug)->firstOrFail();


        $limit = ($request->input('limit') && $request->input('limit') <= 100) ? $request->input('limit') : 12;

        $slider = Slider::where([
            'user_id' => $user->id,
            'available' => 1
        ]);

        $sliders = SliderResource::collection($slider->paginate($limit));
        return $sliders->response()->setStatusCode(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
