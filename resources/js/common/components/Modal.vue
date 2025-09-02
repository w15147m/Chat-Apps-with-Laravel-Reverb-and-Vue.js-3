<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <div @click="$emit('close')" class="absolute inset-0 bg-black bg-opacity-60"></div>

      <transition name="slide">
        <div v-if="isOpen" class="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-8 mx-4">
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
defineEmits(['close']);
</script>

<style scoped>
/* Fade animation for the overlay */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Slide-up animation for the modal */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
