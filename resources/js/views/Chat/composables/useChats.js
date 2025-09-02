import { onMounted, ref } from "vue";
import { useUtils } from "@/common/composables/useUtils";
import { funcApi } from "@/common/services/api.service";

const { user } = useUtils();

// Start with empty array since you're loading from API
const users = ref([]);

const messages = ref([
    { id: 1, sender_id: 1, message: "Hello Jane!", created_at: "10:00" },
    {
        id: 2,
        sender_id: 2,
        message: "Hey John, how are you?",
        created_at: "10:01",
    },
    {
        id: 3,
        sender_id: 1,
        message: "I am good, thank you. Just testing this chat UI.",
        created_at: "10:02",
    },
    {
        id: 4,
        sender_id: 2,
        message: "Looks great! I hope it works well.",
        created_at: "10:03",
    },
]);

const selectedUser = ref(null);

export function useChats() {

    onMounted(async () => {
        try {
            let response = await funcApi.fetchData("/api/users");
            users.value = response.users;
            if (users.value.length > 0) {
                selectedUser.value = users.value[0];
            }

        } catch (error) {
            console.error('Error loading users:', error);
        }
    });

    return {
        user,
        users,
        selectedUser,
        messages,
    };
}
