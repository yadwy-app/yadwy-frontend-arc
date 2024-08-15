<script setup>
import { defineProps } from "vue";

defineProps({
  class: String,
});
</script>

<template>
  <div class="flex items-center gap-x-2 pl-2" :class="class">
    <div class="relative rounded-full bg-yadwy-neutral-50 p-2">
      <Icon name="tabler:shopping-bag" class="h-8 w-8 bg-yadwy-green-900" />
      <span
        class="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 text-white"
        >5</span
      >
    </div>
    <div class="rounded-full bg-yadwy-neutral-50 p-2">
      <Icon name="tabler:heart-filled" class="h-8 w-8 bg-yadwy-green-900" />
    </div>
  </div>
</template>
