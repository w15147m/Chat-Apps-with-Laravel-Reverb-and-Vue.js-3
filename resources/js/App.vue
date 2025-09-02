<template>
    <ChatPage/>
</template>
<script setup>
import {  onMounted } from 'vue';
import ChatPage from './views/Chat/ChatPage.vue'
import { useUtils } from './composables/useUtils'; // Import your new composable
const { user } = useUtils();

onMounted(() => {
  if (window.user) {
    user.value = window.user;
  }
});
</script>

<style lang="scss" scoped>

</style>
