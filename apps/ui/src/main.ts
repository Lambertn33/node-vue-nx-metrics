import './styles.css';

import { createApp } from 'vue';

import { router } from './app/router';

import store from './app/store';

import App from './app/App.vue';

import TheHeader from './app/components/TheHeader.vue';

import UserCard from './app/components/UserCard.vue';

const app = createApp(App);

app
  .use(router)
  .use(store)
  .component('the-header', TheHeader)
  .component('user-card', UserCard)
  .mount('#root');
