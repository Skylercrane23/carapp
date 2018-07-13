<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class UserPostsController extends Controller
{
    public function allUserPosts()
    {
        $user = Auth::user();
        $posts = Post::all()->where('user_id', $user->id);

        $results = $posts->toArray();
        return $results;
    }

}
