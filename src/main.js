import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
// 自動引入 svg
import 'virtual:svg-icons-register';
// 只放共用的class
import '@style/all.scss';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
