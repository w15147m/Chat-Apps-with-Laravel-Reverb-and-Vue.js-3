import './bootstrap';

import './bootstrap';
import { createApp } from 'vue';

import App from './App.vue';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

createApp(App).mount('#app');

Alpine.start();
