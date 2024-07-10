<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { IPost, IUser } from '@node-vue-prom/shared-types';

const store = useStore();
const route = useRoute();

const { users } = store.state;

const user = computed<IUser | null>(() => users.user);
const userPosts = computed<IPost[]>(() => users.userPosts);
const isLoading = computed<boolean>(() => users.loading);

const fetchUser = () => {
    const userId = route.params.id as string;
    store.dispatch('users/fetchUser', userId);
    store.dispatch('users/fetchUserPosts', userId);
}

onMounted(() => {
    fetchUser();
})
</script>

<template>
    <div class="p-4 flex justify-center w-full">
        <div v-if="isLoading" class="flex justify-center items-center">
            <div class="loader">Loading...</div>
        </div>
        <div v-else class="w-full">
            <!-- user details -->

            <div class="flex flex-col items-center gap-3">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900">User details</h2>
                <div class="flex justify-center md:w-1/2 lg:w-1/3">
                    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                        <div class="flex items-center gap-x-2">
                            <v-icon name="fa-user-circle" scale="2" />
                            <div>
                                <h5 class="text-md font-bold tracking-tight text-gray-900">{{ user?.name }}</h5>
                                <p>{{ user?.username }}</p>
                            </div>
                        </div>
                        <div class="flex flex-col my-4 gap-2">
                            <div class="flex gap-x-2 items-center">
                                <v-icon name="md-email" scale="1" />
                                <a :href="'mailto:' + user?.email" class="text-sm font-semibold text-blue-400">{{
                                    user?.email
                                }}</a>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <v-icon name="co-building" scale="1" />
                                <span class="text-xs font-semibold">{{ user?.company.name }}</span>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <v-icon name="co-location-pin" scale="1" />
                                <span class="text-xs font-semibold">{{ user?.address.city }} - {{ user?.address.street
                                    }}</span>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <v-icon name="co-whatsapp" scale="1" />
                                <span class="text-xs font-semibold">{{ user?.phone
                                    }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--user posts-->
            <div class="flex flex-col gap-y-4 mt-8">
                <h2 class="text-center text-2xl font-bold">{{ user?.name }}'s posts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" v-if="userPosts.length > 0">
                    <post-card v-for="post in userPosts" :post="post" />
                </div>
                <h1 v-else class="text-center text-red-600 font-bold">{{ user?.name }} has no posts yet</h1>
            </div>
        </div>
    </div>
</template>