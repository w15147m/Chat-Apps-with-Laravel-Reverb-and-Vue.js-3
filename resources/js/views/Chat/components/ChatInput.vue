<template>
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
</template>

<script setup>
import { ref } from 'vue';
import { useChats } from '../composables/useChats';
const { user , messages, users, selectedUser} = useChats();
const newMessage = ref('');
</script>

<style lang="scss" scoped>

</style>
