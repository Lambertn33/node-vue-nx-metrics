import { Module } from 'vuex';
import { IPost } from '@node-vue-prom/shared-types';
import axios from 'axios';

const apiEndpointUrl = 'http://localhost:3000/posts';

interface PostsState {
  posts: IPost[];
  post: IPost | null;
  loading: boolean;
}

const postsModules: Module<PostsState, any> = {
  namespaced: true,
  state: {
    posts: [],
    post: null,
    loading: false,
  },

  mutations: {
    setPosts(state, posts: IPost[]) {
      state.posts = posts;
    },
    setPost(state, post: IPost) {
      state.post = post;
    },

    setLoading(state, loading: boolean) {
      state.loading = loading;
    },
  },

  actions: {
    // fetch posts
    async fetchPosts({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get(apiEndpointUrl);
        commit('setPosts', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        commit('setLoading', false);
      }
    },

    async fetchPost({ commit }, postId: number) {
      commit('setLoading', true);
      try {
        const response = await axios.get(`${apiEndpointUrl}/${postId}`);
        commit('setPost', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        commit('setLoading', false);
      }
    },
  },

  getters: {
    getPosts: (state) => state.posts,
    getPost: (state) => state.post,
  },
};

export default postsModules;
