<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/users', function (Request $request) {
        return response()->json([
            'users' => \App\Models\User::all()
        ]);
    });


});





Route::any('/{any}', function () {
    return response()->json(['message' => 'API endpoint not found'], 404);
})->where('any', '.*');
