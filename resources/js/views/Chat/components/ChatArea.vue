<template>
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
  <div v-for="message in messages" :key="message.id">
    <!-- Sent Messages -->
    <div v-if="message.sender_id === user.id" class="flex justify-end">
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
        {{ user.name.substring(0, 2).toUpperCase() }}
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
</template>

<script setup>
import { useChats } from '../composables/useChats';
const { user , messages, users, selectedUser} = useChats();
</script>

<style lang="scss" scoped>

</style>
