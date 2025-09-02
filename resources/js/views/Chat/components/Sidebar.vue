<template>
<!-- Responsive sidebar: narrow on small screens, full width on larger screens -->
<div class="w-16 lg:w-1/4 border-r bg-gray-50 border-gray-200 transition-all duration-300">
  <div class="p-2 lg:p-4">
    <!-- Current user section -->
    <div class="flex items-center gap-3 mb-4">
      <div class="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
        {{ user.name.substring(0, 2).toUpperCase() }}
      </div>
      <!-- Hide name on small screens, show on lg+ -->
      <div class="hidden lg:block">
        <div class="text-lg font-semibold text-gray-900">{{ user.name }}</div>
      </div>
    </div>

    <hr class="border-gray-200 my-4 hidden lg:block">

    <!-- Users list -->
    <div v-for="item in users" :key="item.id"
    @click="selectUser(item)" :class="[
              'flex items-center gap-3 p-2 lg:p-3 mb-2 rounded-xl cursor-pointer transition group',
              'justify-center lg:justify-start', // Center on small screens, left-align on large
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

      <!-- Hide name and email on small screens, show on lg+ -->
      <div class="text-wrap hidden lg:block">
        <div class="text-sm font-medium text-gray-900">
          {{ item.name }}
        </div>
        <div class="text-xs text-gray-500 w-36 break-words">
          <span>{{ item.email }}</span>
        </div>
      </div>

      <!-- Optional: Tooltip for small screens showing name on hover -->
      <div class="absolute left-16 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 lg:hidden pointer-events-none whitespace-nowrap">
        {{ item.name }}
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
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
