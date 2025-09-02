<template>
<div class="pl-10 pt-5">
  <div class="flex  ml-[40px] mr-[50px] h-[700px] text-sm border rounded-xl shadow-lg overflow-hidden bg-white border-gray-200">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Chat Area -->
    <div class="w-3/4 flex flex-col">
<ChatArea/>
<ChatInput/>
    </div>
  </div>
</div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import ChatArea from "./components/ChatArea.vue";
import ChatInput from "./components/ChatInput.vue"
</script>
