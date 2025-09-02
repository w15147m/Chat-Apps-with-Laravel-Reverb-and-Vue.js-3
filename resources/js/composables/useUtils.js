import { ref } from 'vue';

const user = ref(window.user || null);

export function useUtils() {
  const setUser = (userData) => {
    user.value = userData;
  };

  return {
    user,
    setUser
  };
}
