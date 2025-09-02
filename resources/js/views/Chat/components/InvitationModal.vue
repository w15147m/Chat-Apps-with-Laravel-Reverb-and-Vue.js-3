<template>
  <Modal :is-open="isOpen" @close="$emit('close')">
    <h3 class="text-xl font-semibold text-gray-900 mb-4">Invite a Friend</h3>
    <p class="text-gray-600 mb-6">Enter the email address of the person you want to chat with.</p>
    <form @submit.prevent="handleSendInvitation">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input v-model="inviteEmail" type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="friend@example.com" required>
      </div>
      <div class="flex justify-end gap-3">
        <button type="button" @click="$emit('close')" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
        <button type="submit" class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Send Invitation</button>
      </div>
    </form>
  </Modal>
</template>

<script setup>
import { ref } from 'vue';
import { useChats } from '../composables/useChats';
import Modal from '@/common/components/Modal.vue'; // The generic modal wrapper

// Props to control visibility from the parent
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

// Emits to communicate back to the parent
const emit = defineEmits(['close']);

const { sendInvitation } = useChats();
const inviteEmail = ref('');

const handleSendInvitation = async () => {
  if (!inviteEmail.value) return;
  const success = await sendInvitation(inviteEmail.value);
  if (success) {
    inviteEmail.value = ''; // Reset the email field
    emit('close'); // Close the modal on success
  }
};
</script>
