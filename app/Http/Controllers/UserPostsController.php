<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class UserPostsController extends Controller
{
    // SHOW ALL USER POSTS
    public function allUserPosts()
    {
        $user = Auth::user();
        $posts = Post::all()->where('user_id', $user->id);

        $results = $posts->toArray();
        return $results;
    }

    // SHOW SINGLE USER POST
    public function showUserPost(Post $post)
    {
        $user_id = Auth::id();
        $post_id = $post->user_id;

        if ($user_id == $post_id) {
            return $post;
        } else {
            return response('something went wrong', 401);
        }

    }

    // UPDATE USER POST
    public function updateUserPosts(Request $request, Post $post)
    {
        $user_id = Auth::id();
        $post_id = $post->user_id;

        if ($user_id == $post_id) {
            $post->update($request->all());
            return response()->json($post, 200);
        } else {
            return response('something went wrong', 401);
        }

    }


    // DELETE USER POST
    public function delete(Post $post)
    {
        $user_id = Auth::id();
        $post_id = $post->user_id;

        if ($user_id == $post_id) {
            $post->delete();
           // return response()->json($post, 200);
        } else {
            return response('something went wrong', 401);
        }

    }


}
