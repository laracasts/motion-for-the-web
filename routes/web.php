<?php

use App\Models\Post;
use Illuminate\Support\Facades\Route;

Route::view('/', 'intro');
Route::view('/css-transitions', 'css-transitions');
Route::view('/transition-behavior', 'transition-behavior');
Route::view('/keyframes', 'keyframes');
Route::view('/path', 'path');
Route::view('/timeline', 'timeline');
Route::view('/timeline-scroll', 'timeline-scroll');

// View Transitions
Route::view('/view-transitions', 'view-transitions');
Route::view('/view-transitions-2', 'view-transitions-2');
Route::get('/view-transitions-3', function () {
 return view('view-transitions-3', [
  'posts' => Post::all(),
 ]);
});

Route::get('/view-transitions/{post}', function (Post $post) {
 return view('view-transitions-4', [
  'post' => $post,
 ]);
});

Route::view('svg-animations', 'svg-animations');

Route::view('js-animations', 'js-animations');
Route::view('motion', 'motion');
Route::view('anime', 'anime');
Route::view('gsap', 'gsap');
Route::view('gsap-parallax', 'gsap-parallax');
