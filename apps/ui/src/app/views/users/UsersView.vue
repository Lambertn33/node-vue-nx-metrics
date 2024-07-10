<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { IUser } from '@node-vue-prom/shared-types';

const store = useStore();

const users = computed<IUser[]>(() => store.state.users.users);
const isLoading = computed<boolean>(() => store.state.users.loading);


const fetchUsers = () => {
    store.dispatch('users/fetchUsers');
};

onMounted(() => {
    fetchUsers();
});
</script>

<template>
    <div class="p-4">
        <h2 class="text-2xl flex justify-center font-bold">Users List</h2>
        <div v-if="isLoading" class="flex justify-center items-center">
            <div class="loader">Loading...</div>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <user-card v-for="user in users" :key="user.id" :user="user" />
        </div>
    </div>
</template>

<style scoped>
/* Add any scoped styles for this component */
</style>