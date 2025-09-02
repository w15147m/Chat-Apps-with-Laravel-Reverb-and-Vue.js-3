<template>
   <div class="w-1/4 border-r bg-gray-50 border-gray-200">
        <div class="p-4">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
              {{ user.name.substring(0, 2).toUpperCase() }}
            </div>
            <div>
              <div class="text-lg font-semibold text-gray-900">{{ user.name }}</div>
            </div>
          </div>
          <hr class="border-gray-200 my-4">
          <div v-for="item in users" :key="item.id"
            @click="selectedUser = item"
            :class="['flex items-center gap-3 p-3 mb-2 rounded-xl cursor-pointer transition', selectedUser.id === item.id ? 'bg-purple-50 border border-purple-200 shadow-md' : 'hover:bg-gray-100']">
            <div class="relative">
              <div class="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
                {{ item.name.substring(0, 2).toUpperCase() }}
              </div>
              <span class="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div class="text-wrap">
              <div class="text-sm font-medium text-gray-900">
                {{ item.name }}
              </div>
              <div class="text-xs text-gray-500 w-36 break-words">
                <span>{{ item.email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

</template>

<script setup>
import { useChats } from '../composables/useChats';
const { user , users, selectedUser} = useChats();

</script>

<style lang="scss" scoped>

</style>
