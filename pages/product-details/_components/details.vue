<script setup lang="ts">
import { defineProps } from "vue";

// Define the props for the component
const props = defineProps<{
  title: string;
  price: string;
  rate: number;
  description: string;
}>();
</script>

<template class="flex">
  <div class="flex flex-col gap-4">
    <div class="flex items-start justify-between md:items-center">
      <h2 class="text-xl font-bold md:text-3xl">{{ props.title }}</h2>
      <Icon name="tabler:heart" class="h-8 w-8" />
    </div>
    <div
      class="flex w-fit items-center justify-center gap-2 rounded-lg bg-[#FFFBF1] text-black"
    >
      <h3 class="rounded-l-lg bg-[#FEE440] px-2">
        <Icon name="tabler:star-filled" class="w-4 bg-white" />
      </h3>
      <span class="px-2 font-bold">{{ props.rate }}/5</span>
    </div>
    <span class="text-2xl">{{ props.price }}</span>
    <p class="text-left text-[#5E6A6B]">
      {{ props.description }}
    </p>
  </div>
</template>
