<script setup lang="ts">
import { IUser } from '@node-vue-prom/shared-types';

defineProps<{
    user: IUser
}>();
</script>

<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{{ user.name }} - {{
                user.username }}</h5>
        </a>
        <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.</p> -->
    </div>
</template>