<script setup>
import { defineProps } from "vue";

defineProps({
  class: String,
});
</script>

<template>
  <div class="flex gap-x-2 items-center pl-2" :class="class">
    <div class="relative p-2 rounded-full bg-yadwy-neutral-50">
      <Icon name="tabler:shopping-bag" class="w-8 h-8 bg-yadwy-green-900" />
      <span
        class="absolute -top-2 -right-2 px-2 text-white bg-red-500 rounded-full"
        >5</span
      >
    </div>
    <div class="p-2 rounded-full bg-yadwy-neutral-50">
      <Icon name="tabler:heart-filled" class="w-8 h-8 bg-yadwy-green-900" />
    </div>
  </div>
</template>
