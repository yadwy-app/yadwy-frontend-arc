<script setup>
import { defineProps } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  class: String
});
</script>

<template>
  <div :class="cn('flex', props.class)">
    <Icon name="tabler:shopping-bag" class="w-12 h-12"/>
    <Icon name="tabler:heart-filled" class="w-12 h-12"/>
  </div>
</template>
