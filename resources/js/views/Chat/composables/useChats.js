import { onMounted, ref, watch } from "vue";
import { useUtils } from "@/common/composables/useUtils";
import { funcApi } from "@/common/services/api.service";

const { user } = useUtils();

const users = ref([]);
const newMessage = ref("");
const messages = ref([]);
const selectedUser = ref(null);
const inviteEmail = ref(null);


export function useChats() {
    const handleSendInvitation = async () => {
        if (!inviteEmail.value) return;
       try {
            let response = await funcApi.post(
                `/api/invite`,
                { email: inviteEmail.value }
            );
            messages.value.push(response.data);
            newMessage.value = "";
        } catch (error) {
            console.error("Error loading users:", error);
        }


    };

    const sendMessage = async () => {
        if (!newMessage.value) return;
        try {
            let response = await funcApi.post(
                `/api/chat/${selectedUser.value.id}`,
                { chat: newMessage.value }
            );
            messages.value.push(response.data);
            newMessage.value = "";
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

    const chatListener = () => {
        const userId = user.value.id;
        if (userId) {
            window.Echo.private(`chat.${userId}`).listen(
                "MessageSent",
                (data) => {
                    messages.value.push(data);
                }
            );
        }
    };
    return {
        user,
        users,
        selectedUser,
        newMessage,
        messages,
        inviteEmail,
        // functions
        getUsers,
        selectUser,
        sendMessage,
        chatListener,
        handleSendInvitation,
    };
}
