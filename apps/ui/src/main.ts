import './styles.css';

import { createApp } from 'vue';
import { router } from './app/router';
import App from './app/App.vue';
import TheHeader from './app/components/TheHeader.vue';

const app = createApp(App);

app.use(router).component('the-header', TheHeader).mount('#root');
