<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Define specific routes first.
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Place the catch-all route at the very end of your file.
Route::any('/{page?}', function () {
    return response()->json(['message' => 'Request Not Found'], 404);
})->where('page', '.*');
