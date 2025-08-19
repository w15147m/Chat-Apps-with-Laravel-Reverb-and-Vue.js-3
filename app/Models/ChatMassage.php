<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatMassage extends Model
{
    protected $fillable = [ "id", "sender_id","receiver_id","message"];
    //
}
