<template>
  <div class="pl-10 pt-5">
    <div class="flex  ml-[40px] mr-[50px] h-[700px] text-sm border rounded-xl shadow-lg overflow-hidden bg-white border-gray-200">
      <!-- Sidebar -->
      <div class="w-1/4 border-r bg-gray-50 border-gray-200">
        <div class="p-4">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
              {{ hardcodedUser.name.substring(0, 2).toUpperCase() }}
            </div>
            <div>
              <div class="text-lg font-semibold text-gray-900">{{ hardcodedUser.name }}</div>
            </div>
          </div>
          <hr class="border-gray-200 my-4">
          <div v-for="user in hardcodedUsers" :key="user.id"
            @click="selectedUser = user"
            :class="['flex items-center gap-3 p-3 mb-2 rounded-xl cursor-pointer transition', selectedUser.id === user.id ? 'bg-purple-50 border border-purple-200 shadow-md' : 'hover:bg-gray-100']">
            <div class="relative">
              <div class="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
                {{ user.name.substring(0, 2).toUpperCase() }}
              </div>
              <span class="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div class="text-wrap">
              <div class="text-sm font-medium text-gray-900">
                {{ user.name }}
              </div>
              <div class="text-xs text-gray-500 w-36 break-words">
                <span>{{ user.email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Area -->
      <div class="w-3/4 flex flex-col">
        <!-- Chat Header -->
        <div class="flex items-center justify-between p-4 border-b bg-white border-gray-200">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
              {{ selectedUser.name.substring(0, 2).toUpperCase() }}
            </div>
            <div>
              <div class="text-lg font-semibold text-gray-900">{{ selectedUser.name }}</div>
              <div class="text-xs text-gray-500">Offline</div>
            </div>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
          <div v-for="message in hardcodedMessages" :key="message.id">
            <!-- Sent Messages -->
            <div v-if="message.sender_id === hardcodedUser.id" class="flex justify-end">
              <div class="max-w-xs px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow">
                {{ message.message }}
                <div class="text-[10px] text-right opacity-70 mt-1">
                  {{ message.created_at }}
                </div>
              </div>
              <div class="h-10 m-2 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
                {{ selectedUser.name.substring(0, 2).toUpperCase() }}
              </div>
            </div>
            <!-- Received Messages -->
            <div v-else class="flex justify-start">
              <div class="h-10 m-2 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
                {{ hardcodedUser.name.substring(0, 2).toUpperCase() }}
              </div>
              <div class="max-w-xs px-4 py-2 rounded-2xl bg-white text-gray-800 shadow border border-gray-200">
                {{ message.message }}
                <div class="text-[10px] text-left text-gray-500 mt-1">
                  {{ message.created_at }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Message Input -->
        <form @submit.prevent="sendMessage" class="p-4 border-t bg-white border-gray-200 flex items-center gap-2">
          <input type="text"
            v-model="newMessage"
            class="flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 placeholder-gray-500 shadow-sm"
            placeholder="Type your message..." />
          <button type="submit"
            class="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-medium shadow hover:opacity-90 transition">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hardcodedUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};

const hardcodedUsers = ref([
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Peter Jones', email: 'peter@example.com' },
  { id: 4, name: 'Sarah Miller', email: 'sarah@example.com' },
]);

const hardcodedMessages = ref([
  { id: 1, sender_id: 1, message: 'Hello Jane!', created_at: '10:00' },
  { id: 2, sender_id: 2, message: 'Hey John, how are you?', created_at: '10:01' },
  { id: 3, sender_id: 1, message: 'I am good, thank you. Just testing this chat UI.', created_at: '10:02' },
  { id: 4, sender_id: 2, message: 'Looks great! I hope it works well.', created_at: '10:03' },
]);

const selectedUser = ref(hardcodedUsers.value[0]);
const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    const messagePayload = {
      id: Date.now(),
      sender_id: hardcodedUser.id,
      message: newMessage.value,
      created_at: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };
    hardcodedMessages.value.push(messagePayload);
    newMessage.value = '';
  }
};
</script>
