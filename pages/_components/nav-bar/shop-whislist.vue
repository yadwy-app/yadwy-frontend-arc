<script setup>
import { defineProps } from 'vue';

defineProps({
  class: String
});
</script>

<template>
  <div class="flex items-center gap-x-2 pl-2" :class="class">
    <div class="p-2 bg-yadwy-neutral-50 rounded-full relative">
      <Icon name="tabler:shopping-bag" class="w-8 h-8 bg-yadwy-green-900"/>
      <span class="bg-red-500 text-white rounded-full px-2 absolute absolute -top-2 -right-2">5</span>
    </div>
    <div class="p-2 bg-yadwy-neutral-50 rounded-full  ">
     <Icon name="tabler:heart-filled" class="w-8 h-8 bg-yadwy-green-900"/>
    </div>
  </div>
</template>
