<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //dd($request);
        $this->validate($request, [
            'description' => 'required',
            'title' => 'required',
        ]);

        $user_id = Auth::id();

        $post = Post::create([
            'user_id' => $user_id,
            'title' => $request['title'],
            'description' => $request['description'],
            'budget' => $request['budget'],
            'mileage' => $request['mileage'],
            'location' => $request['location'],
            'timeframe' => $request['timeframe'],
            // VEHICLE INFO
            'vehicle_overview' => $request['vehicle_overview'],
            'vehicle_type' => $request['vehicle_type'],
            'vehicle_make' => $request['vehicle_make'],
            'vehicle_model' => $request['vehicle_model'],
            'vehicle_year' => $request['vehicle_year'],
            'vehicle_title_type' => $request['vehicle_title_type'],
            //FEATURES
            'features' => $request['features'],
            // IMAGES
            'image_url' => $request['image_url'],
            //PAYMENT OPTIONS
            'payment_type' => $request['payment_type'],
            'seller_preference' => $request['seller_preference'],
            'loan_payment_method' => $request['loan_payment_method'],
            'dealer_door_price' => $request['dealer_door_price'],
            'other_notes' => $request['other_notes'],
        ]);

        $post->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return response()->json($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Post $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $post->update($request->all());

        return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post $post
     * @return \Illuminate\Http\Response
     */
    public function delete(Post $post)
    {
        $post->delete();

        return response()->json(null, 204);
    }
}
