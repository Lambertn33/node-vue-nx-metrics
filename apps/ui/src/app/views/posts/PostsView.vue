<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { IPost } from '@node-vue-prom/shared-types';


const store = useStore();
const searchQuery = ref('');

const posts = computed<IPost[]>(() => store.state.posts.posts);
const isLoading = computed<boolean>(() => store.state.posts.loading);


const fetchPosts = () => {
    if (!posts.value.length) {
        store.dispatch('posts/fetchPosts');
    }
};

const filteredPosts = computed<IPost[]>(() => {
    if (!searchQuery) return posts.value;
    const query = searchQuery.value.toLowerCase();
    return posts.value.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase()));
});

onMounted(() => {
    fetchPosts();
});
</script>

<template>
    <div class="p-4">
        <h2 class="text-2xl flex justify-center font-bold">Posts List</h2>
        <div v-if="isLoading" class="flex justify-center items-center">
            <div class="loader">Loading...</div>
        </div>
        <div v-else class="w-full">
            <div class="flex justify-center py-4">
                <input type="text" placeholder="search post..." v-model="searchQuery"
                    class="border border-gray-400 px-4 py-2 rounded-md w-[400px]">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <post-card v-for="post in filteredPosts" :key="post.id" :post="post" />
            </div>

        </div>
    </div>
</template>