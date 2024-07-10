<script setup lang="ts">
import { IUser } from '@node-vue-prom/shared-types';

defineProps<{
    user: IUser
}>();
</script>

<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="flex items-center gap-x-2">
            <v-icon name="fa-user-circle" scale="2" />
            <div>
                <h5 class="text-md font-bold tracking-tight text-gray-900">{{ user.name }}</h5>
                <p>{{ user.username }}</p>
            </div>
        </div>
        <div class="flex flex-col my-4 gap-2">
            <div class="flex gap-x-2 items-center">
                <v-icon name="md-email" scale="1" />
                <a :href="'mailto:' + user.email" class="text-sm font-semibold text-blue-400">{{ user.email }}</a>
            </div>
            <div class="flex gap-x-2 items-center">
                <v-icon name="co-building" scale="1" />
                <span class="text-xs font-semibold">{{ user.company.name }}</span>
            </div>
            <div class="flex gap-x-2 items-center">
                <v-icon name="co-location-pin" scale="1" />
                <span class="text-xs font-semibold">{{ user.address.city }} - {{ user.address.street }}</span>
            </div>
        </div>
        <div class="flex">
            <router-link :to="`/users/${user.id}`"
                class="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md text-white w-full flex justify-center font-bold">More
                details</router-link>
        </div>
    </div>
</template>