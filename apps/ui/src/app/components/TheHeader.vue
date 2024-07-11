<script setup lang="ts">
defineProps<{
    title: string;
}>();

interface Link {
    to: string;
    label: string,
    dataCy: string
}

const links: Link[] = [
    { to: '/', label: 'Home', dataCy: 'home-link' },
    { to: '/users', label: 'Users', dataCy: 'users-link' },
    { to: '/posts', label: 'Posts', dataCy: 'posts-link' },
]

</script>
<template>
    <div class="bg-blue-600 w-full flex justify-between px-8 py-4">
        <h2 class="text-3xl font-semibold text-white">{{ title }}</h2>
        <div class="flex gap-x-4 items-center">
            <router-link :data-cy="link.dataCy" v-for="link in links" :to="link.to" activeClass="text-gray-300"
                exactActiveClass="font-bold text-red-600">
                <span class="text-white font-semibold hover:text-gray-300"> {{ link.label }}</span>
            </router-link>
        </div>
    </div>
</template>