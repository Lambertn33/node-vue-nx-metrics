import { Module } from 'vuex';
import { IUser, IPost } from '@node-vue-prom/shared-types';
import axios from 'axios';

const apiEndpointUrl = 'http://localhost:3000/users';

interface UsersState {
  users: IUser[];
  user: IUser | null;
  userPosts: IPost[];
  loading: boolean;
}

const usersModule: Module<UsersState, any> = {
  namespaced: true,
  state: {
    users: [],
    user: null,
    userPosts: [],
    loading: false,
  },

  mutations: {
    setUsers(state, users: IUser[]) {
      state.users = users;
    },
    setUser(state, user: IUser) {
      state.user = user;
    },
    setUserPosts(state, posts: IPost[]) {
      state.userPosts = posts;
    },
    setLoading(state, loading: boolean) {
      state.loading = loading;
    },
  },

  actions: {
    // fetch users
    async fetchUsers({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get(apiEndpointUrl);
        commit('setUsers', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        commit('setLoading', false);
      }
    },

    // fetch single user
    async fetchUser({ commit }, userId: number) {
      commit('setLoading', true);
      try {
        const response = await axios.get(`${apiEndpointUrl}/${userId}`);
        commit('setUser', response.data);
      } catch (error) {
        console.error(`Error fetching user with ID ${userId}:`, error);
      } finally {
        commit('setLoading', false);
      }
    },

    // fetch user posts
    async fetchUserPosts({ commit }, userId: number) {
      commit('setLoading', true);
      try {
        const response = await axios.get(`${apiEndpointUrl}/${userId}/posts`);
        commit('setUserPosts', response.data);
      } catch (error) {
        console.error(
          `Error fetching posts for user with ID ${userId}:`,
          error
        );
      } finally {
        commit('setLoading', false);
      }
    },
  },

  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => state.user,
    getUserPosts: (state) => state.userPosts,
  },
};

export default usersModule;
