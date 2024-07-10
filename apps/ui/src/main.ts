import './styles.css';

import { createApp } from 'vue';

import { router } from './app/router';

import store from './app/store';

import App from './app/App.vue';

import TheHeader from './app/components/TheHeader.vue';

import UserCard from './app/components/UserCard.vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';

import {
  CoBuilding,
  CoLocationPin,
  FaUserCircle,
  MdEmail,
} from 'oh-vue-icons/icons';

addIcons(FaUserCircle, MdEmail, CoBuilding, CoLocationPin);

const app = createApp(App);

app
  .use(router)
  .use(store)
  .component('v-icon', OhVueIcon)
  .component('the-header', TheHeader)
  .component('user-card', UserCard)
  .mount('#root');
