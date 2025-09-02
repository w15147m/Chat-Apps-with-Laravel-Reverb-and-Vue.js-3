<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {

  Route::get('/users', [ProfileController::class, 'getUsers']);

});

Route::any('/{any}', function () {
    return response()->json(['message' => 'API endpoint not found'], 404);
})->where('any', '.*');
