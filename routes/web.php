<?php

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
})->name('landing');

Route::get('/dashboard', function () {
    return view('home');
})->name('home')->middleware('auth');

//Posts
Route::get('api/posts', 'PostController@index')->middleware('auth');
Route::get('api/posts/{post}', 'PostController@show')->middleware('auth');
Route::post('api/posts', 'PostController@store')->middleware('auth');
Route::put('api/posts/{post}', 'PostController@update')->middleware('auth');
Route::delete('api/posts/{post}', 'PostController@delete')->middleware('auth');

// USER POSTS
Route::get('api/myposts', 'UserPostsController@allUserPosts')->middleware('auth');
Route::get('api/myposts/{post}', 'UserPostsController@showUserPost')->middleware('auth');
Route::put('api/myposts/{post}', 'UserPostsController@updateUserPosts')->middleware('auth');

//AUTH ROUTES
Auth::routes();

// REACT ROUTES TO NOT MESS WITH REACT ROUTER
Route::get( '/home/{path?}', function(){
    return view( 'layouts.app' );
} )->where('path', '.*')->middleware('auth')->name('react');

