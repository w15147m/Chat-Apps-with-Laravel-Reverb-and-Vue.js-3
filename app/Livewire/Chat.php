<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class Chat extends Component
{
    public $users;
    public $selectedUser;
    public function mount()
    {
        $this->users = User::where('id', '!=', Auth::id())->get();
        $this->selectedUser = $this->users->first();
    }
    public function selectUser($userId)
    {
        $this->selectedUser = User::find($userId);
    }

    public function render()
    {
        return view('livewire.chat');
    }
}
