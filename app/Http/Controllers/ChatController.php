<?php
namespace App\Http\Controllers;

use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{
    public function getUserChats($sender_id)
    {
        $chats = ChatMessage::query()
            ->where(function ($q) use ($sender_id) {
                $q->where("sender_id", Auth::id())
                    ->where("receiver_id", $sender_id);
            })
            ->orWhere(function ($q) use ($sender_id) {
                $q->where("sender_id", $sender_id)
                    ->where("receiver_id", Auth::id());
            })->get();
        return $chats;
    }
    public function sendChat($receiver_id, Request $request)
    {
        Log::info($request->chat);
        if (! $request->chat) {
            return;
        }

        $message = ChatMessage::create([
            "sender_id"   => Auth::id(),
            "receiver_id" => $receiver_id,
            "message"     => $request->chat,
        ]);
        return $message;

    }

}
