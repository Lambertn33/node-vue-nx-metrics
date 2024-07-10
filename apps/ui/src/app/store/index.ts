import usersModule from './modules/users';
import postsModule from './modules/posts';
import Vuex from 'vuex';

const store = new Vuex.Store({
  modules: {
    users: usersModule,
    posts: postsModule,
  },
});

console.log(store);

export default store;
