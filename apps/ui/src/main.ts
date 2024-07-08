import './styles.css';

import { createApp } from 'vue';
import App from './app/App.vue';
import TheHeader from './app/components/TheHeader.vue';

const app = createApp(App);

app.component('the-header', TheHeader);

app.mount('#root');
