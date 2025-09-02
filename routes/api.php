<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {

  Route::get('/users', [ProfileController::class, 'getUsers']);
  Route::get('/chats/sender/{user_id}', [ChatController::class, 'getUserChats']);
  Route::post('/chat/{sender_id}', [ChatController::class, 'sendChat']);


});

Route::any('/{any}', function () {
    return response()->json(['message' => 'API endpoint not found'], 404);
})->where('any', '.*');
