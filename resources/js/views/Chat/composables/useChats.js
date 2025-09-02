import { onMounted, ref, watch } from "vue";
import { useUtils } from "@/common/composables/useUtils";
import { funcApi } from "@/common/services/api.service";

const { user } = useUtils();

// Start with empty array since you're loading from API
const users = ref([]);
const newMessage = ref("");
const messages = ref([]);
const selectedUser = ref(null);

export function useChats() {
    const sendMessage = async () => {
        try {
            let response = await funcApi.post(
                `/api/chat/${selectedUser.value.id}`,
                 { chat: newMessage.value }
            );
        } catch (error) {
            console.error("Error loading users:", error);
        }
    };
    const getUsers = async () => {
        try {
            let response = await funcApi.fetchData("/api/users");
            users.value = response;
            if (users.value.length > 0) {
                selectUser(users.value[0]);
            }
        } catch (error) {
            console.error("Error loading users:", error);
        }
    };
    const selectUser = async (item) => {
        selectedUser.value = item;
        try {
            let response = await funcApi.fetchData(
                `/api/chats/sender/${selectedUser.value.id}`
            );
            messages.value = response;
        } catch (error) {
            console.error("Error loading users:", error);
        }
    };

    return {
        user,
        users,
        selectedUser,
        newMessage,
        messages,
        // functions
        getUsers,
        selectUser,
        sendMessage,
    };
}
