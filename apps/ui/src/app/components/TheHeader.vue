<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>
<template>
    <div class="flex justify-center">
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
    </div>
</template>