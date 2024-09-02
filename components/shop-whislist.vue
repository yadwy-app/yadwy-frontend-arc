<script setup>
import ShoppingCartDialog from "@/components/ShoppingCartDialog.vue";

import { defineProps } from "vue";

defineProps({
  class: String,
});
</script>

<template>
  <div class="flex gap-x-2 items-center pl-2" :class="class">
    <ShoppingCartDialog />
    <div class="p-2 rounded-full bg-yadwy-neutral-50">
      <Icon name="tabler:heart-filled" class="w-4 h-4 bg-yadwy-green-900" />
    </div>
  </div>
</template>
