<template>
 <div class="w-16 lg:w-1/4 border-r bg-gray-50 border-gray-200 transition-all duration-300 h-full relative">

    <div class="h-[calc(100%-80px)] overflow-y-auto p-2 lg:p-4">
    <div class="flex items-center gap-3 mb-4">
      <div class="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
        {{ user.name.substring(0, 2).toUpperCase() }}
      </div>
      <div class="hidden lg:block">
        <div class="text-lg font-semibold text-gray-900">{{ user.name }}</div>
      </div>
    </div>

    <hr class="border-gray-200 my-4 hidden lg:block">
    <div v-for="item in users" :key="item.id" @click="selectUser(item)" :class="[
              'flex items-center gap-3 p-2 lg:p-3 mb-2 rounded-xl cursor-pointer transition group',
              'justify-center lg:justify-start',
              selectedUser.id === item.id
                ? 'bg-purple-50 border border-purple-200 shadow-md'
                : 'hover:bg-gray-100'
            ]">

      <div class="relative flex-shrink-0">
        <div class="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
          {{ item.name.substring(0, 2).toUpperCase() }}
        </div>
        <span class="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      <div class="text-wrap hidden lg:block">
        <div class="text-sm font-medium text-gray-900">
          {{ item.name }}
        </div>
        <div class="text-xs text-gray-500 w-36 break-words">
          <span>{{ item.email }}</span>
        </div>
      </div>

      <div class="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 lg:hidden pointer-events-none whitespace-nowrap">
        {{ item.name }}
      </div>
    </div>
  </div>

    <div class="absolute bottom-0 left-0 w-full p-4 bg-gray-50 border-t border-gray-200">
      <button @click="isModalOpen = true" class="w-full flex items-center justify-center lg:justify-start gap-3 bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-purple-700 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span class="hidden lg:inline">New Chat</span>
      </button>
    </div>
  </div>

  <InvitationModal :is-open="isModalOpen" @close="isModalOpen = false" />
</template>

<script setup>
import InvitationModal from './InvitationModal.vue';

const isModalOpen = ref(false);

import {
  onMounted,
  ref,
  watch
} from "vue";
import {
  useChats
} from '../composables/useChats';
const {
  user,
  users,
  selectedUser,
  getUsers,
  selectUser
} = useChats();

onMounted(() => {
  getUsers();
})
</script>

<style lang="scss" scoped>
</style>
