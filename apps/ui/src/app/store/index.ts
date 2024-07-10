import usersModule from './modules/users';
import Vuex from 'vuex';

const store = new Vuex.Store({
  modules: {
    users: usersModule,
    //posts: postsModule,
  },
});

export default store;
