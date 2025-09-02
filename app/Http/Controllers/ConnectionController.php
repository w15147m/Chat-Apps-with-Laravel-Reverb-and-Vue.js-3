<?php

namespace App\Http\Controllers;

use App\Models\Connection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ConnectionController extends Controller
{

    public function sendInvitation(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);
        $addressee = User::where('email', $request->email)->first();
        if (!$addressee) {
            return response()->json(['message' => 'User with that email not found.'], 404);
        }
        if ($addressee->id === Auth::id()) {
            return response()->json(['message' => 'You cannot send an invitation to yourself.'], 422);
        }
        $existingConnection = Connection::where(function ($query) use ($addressee) {
            $query->where('requester_id', Auth::id())->where('addressee_id', $addressee->id);
        })->orWhere(function ($query) use ($addressee) {
            $query->where('requester_id', $addressee->id)->where('addressee_id', Auth::id());
        })->first();

        if ($existingConnection) {
            return response()->json(['message' => 'A connection with this user already exists or is pending.'], 422);
        }
        $connection = Connection::create([
            'requester_id' => Auth::id(),
            'addressee_id' => $addressee->id,
        ]);

        return response()->json(['message' => 'Invitation sent successfully.', 'connection' => $connection], 201);
    }
}
