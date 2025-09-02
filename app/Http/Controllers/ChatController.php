<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{
     public function getUserChats($sender_id)
    {
        $chats = ChatMessage::query()
            ->where(function ($q)  use ($sender_id) {
                $q->where("sender_id", Auth::id())
                    ->where("receiver_id", $sender_id);
            })
            ->orWhere(function ($q)  use ($sender_id){
                $q->where("sender_id", $sender_id)
                    ->where("receiver_id", Auth::id());
            })->get();
        return  $chats;
    }
}
