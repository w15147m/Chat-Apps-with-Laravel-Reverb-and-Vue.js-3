<!-- ChatPage.vue - FIXED for responsive layout -->
<template>
  <div class="pl-2 lg:pl-10 pt-5">
    <div class="flex ml-2 lg:ml-[40px] mr-2 lg:mr-[50px] h-[700px] text-sm border rounded-xl shadow-lg overflow-hidden bg-white border-gray-200">
      <!-- Responsive Sidebar -->
      <Sidebar />

      <!-- Chat Area - Adjust width based on sidebar -->
      <div class="flex-1 lg:w-3/4 flex flex-col">
        <ChatArea />
        <ChatInput />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import ChatArea from "./components/ChatArea.vue";
import ChatInput from "./components/ChatInput.vue";
</script>
