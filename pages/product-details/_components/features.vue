<script setup lang="ts">
import { defineProps } from "vue";

// Define the props for the component
const feature = defineProps<{
  icon: string;
  description: string;
}>();
</script>

<template class="flex">
  <div class="flex items-center gap-2">
    <Icon :name="feature.icon" class="h-6 w-6 font-bold text-yadwy-green-500" />
    <span class="text-xl text-[#5E6A6B]">{{ feature.description }}</span>
  </div>
</template>
