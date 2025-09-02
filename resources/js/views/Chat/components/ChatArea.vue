<!-- ChatArea.vue - WITH AUTO-SCROLL -->
<template>
  <!-- Chat Header -->
  <div class="flex items-center justify-between p-4 border-b bg-white border-gray-200">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
        {{ selectedUser?.name.substring(0, 2).toUpperCase() }}
      </div>
      <div>
        <div class="text-lg font-semibold text-gray-900">{{ selectedUser?.name }}</div>
        <div class="text-xs text-gray-500">Offline</div>
      </div>
    </div>
  </div>

  <!-- Messages Area -->
  <div
    ref="messagesContainer"
    class="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50"
    style="scroll-behavior: smooth;"
  >
    <div v-for="message in messages" :key="message.id">
      <!-- Sent Messages (from current user) -->
      <div v-if="message.sender_id === user.id" class="flex justify-end">
        <div class="max-w-xs px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow break-words word-wrap">
          {{ message.message }}
          <div class="text-[10px] text-right opacity-70 mt-1">
            {{ message.created_at }}
          </div>
        </div>
        <!-- Show current user's avatar for sent messages -->
        <div class="h-10 m-2 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
          {{ user.name.substring(0, 2).toUpperCase() }}
        </div>
      </div>

      <!-- Received Messages (from selected user) -->
      <div v-else class="flex justify-start">
        <!-- Show selected user's avatar for received messages -->
        <div class="h-10 m-2 w-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white font-semibold">
          {{ selectedUser?.name.substring(0, 2).toUpperCase() }}
        </div>
        <div class="max-w-xs px-4 py-2 rounded-2xl bg-white text-gray-800 shadow border border-gray-200 break-words word-wrap">
          {{ message.message }}
          <div class="text-[10px] text-left text-gray-500 mt-1">
            {{ message.created_at }}
          </div>
        </div>
      </div>
    </div>
    <!-- Invisible element to scroll to -->
    <div ref="scrollTarget"></div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch, onMounted } from 'vue';
import { useChats } from '../composables/useChats';

const { user, messages, users, selectedUser } = useChats();

// Template refs
const messagesContainer = ref(null);
const scrollTarget = ref(null);

// Function to scroll to bottom
const scrollToBottom = () => {
  if (scrollTarget.value) {
    scrollTarget.value.scrollIntoView({ behavior: 'smooth' });
  }
};

// Watch for new messages and scroll to bottom
watch(messages, () => {
  nextTick(() => {
    scrollToBottom();
  });
}, { deep: true });

// Watch for selected user change and scroll to bottom
watch(selectedUser, () => {
  nextTick(() => {
    scrollToBottom();
  });
});

// Scroll to bottom on component mount
onMounted(() => {
  nextTick(() => {
    scrollToBottom();
  });
});
</script>
