<script setup lang="ts">
import { IPost } from '@node-vue-prom/shared-types';

defineProps<{
    post: IPost
}>();
</script>

<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="flex flex-col gap-y-2">
            <h2 class="font-bold text-xl text-center">{{ post.title }}</h2>
            <p class="text-justify">{{ post.body }}</p>
        </div>
    </div>
</template>