<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <h2 class="text-red-500 text-3xl">{{ title }}</h2>
</template>
