import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import HomeView from './views/HomeView.vue';

import UsersView from './views/users/UsersView.vue';
import UserView from './views/users/UserView.vue';

import PostsView from './views/posts/PostsView.vue';
import PostView from './views/posts/PostView.vue';

import NotFoundView from './views/404View.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/users',
    component: UsersView,
  },
  {
    path: '/users/:id',
    component: UserView,
  },
  {
    path: '/posts',
    component: PostsView,
  },
  {
    path: '/posts/:id',
    component: PostView,
  },
  {
    path: '/:patchMatch(.*)*',
    component: NotFoundView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
