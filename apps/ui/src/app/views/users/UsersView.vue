<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { IUser } from '@node-vue-prom/shared-types';

const store = useStore();
const searchQuery = ref('');

const users = computed<IUser[]>(() => store.state.users.users);
const isLoading = computed<boolean>(() => store.state.users.loading);


const fetchUsers = () => {
    if (!users.value.length) {
        store.dispatch('users/fetchUsers');
    }
};

const filteredUsers = computed<IUser[]>(() => {
    if (!searchQuery) return users.value;
    const query = searchQuery.value.toLowerCase();
    return users.value.filter(user => user.email.toLowerCase().includes(query.toLowerCase()) || user.name.toLowerCase().includes(query.toLowerCase())
        || user.username.toLowerCase().includes(query.toLowerCase()));
});

onMounted(() => {
    fetchUsers();
});
</script>

<template>
    <div class="p-4">
        <h2 class="text-2xl flex justify-center font-bold" data-cy="users-title">Users List</h2>
        <div v-if="isLoading" class="flex justify-center items-center">
            <div class="loader">Loading...</div>
        </div>
        <div v-else class="w-full">
            <div class="flex justify-center py-4">
                <input data-cy="users-search" type="text" placeholder="search user..." v-model="searchQuery"
                    class="border border-gray-400 px-4 py-2 rounded-md w-[400px]">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <user-card v-for="user in filteredUsers" :key="user.id" :user="user" />
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Add any scoped styles for this component */
</style>