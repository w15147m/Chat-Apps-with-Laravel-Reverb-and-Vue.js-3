import { ref } from 'vue';
import { useUtils } from '../../../composables/useUtils'; // Import your new composable
const { user } = useUtils();
const users = ref([
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Peter Jones', email: 'peter@example.com' },
  { id: 4, name: 'Sarah Miller', email: 'sarah@example.com' },
]);
const messages = ref([
  { id: 1, sender_id: 1, message: 'Hello Jane!', created_at: '10:00' },
  { id: 2, sender_id: 2, message: 'Hey John, how are you?', created_at: '10:01' },
  { id: 3, sender_id: 1, message: 'I am good, thank you. Just testing this chat UI.', created_at: '10:02' },
  { id: 4, sender_id: 2, message: 'Looks great! I hope it works well.', created_at: '10:03' },
]);
const selectedUser = ref(users.value[0]);

export function useChats() {

  return {
    user,
    users,
    selectedUser,
    messages,
  };
}
