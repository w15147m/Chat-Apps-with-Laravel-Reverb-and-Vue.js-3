import { onMounted, ref, watch } from "vue";
import { useUtils } from "@/common/composables/useUtils";
import { funcApi } from "@/common/services/api.service";

const { user } = useUtils();

// Start with empty array since you're loading from API
const users = ref([]);

const messages = ref([]);

const selectedUser = ref(null);
// sender_id
// receiver_id
export function useChats() {
    const selectUser = async (item) => {
        selectedUser.value = item;
        try {
            let response = await funcApi.fetchData(`/api/chats/sender/${selectedUser.value.id}`);
              messages.value = response;
        } catch (error) {
            console.error("Error loading users:", error);
        }
    };

    const getUsers = async () => {
        try {
            let response = await funcApi.fetchData("/api/users");
            users.value = response;
            if (users.value.length > 0) {
                selectedUser.value = users.value[0];
            }
        } catch (error) {
            console.error("Error loading users:", error);
        }
    };

    return {
        user,
        users,
        selectedUser,
        messages,
        // functions
        getUsers,
        selectUser,
    };
}
