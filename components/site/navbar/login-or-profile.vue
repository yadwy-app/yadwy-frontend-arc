<script setup>
import { Button } from "~/components/ui/button/index.ts";
import { defineProps } from "vue";

defineProps({
  class: String,
});
</script>

<template>
  <Button class="bg-yadwy-green-500 hover:bg-yadwy-green-600" :class="class">Login</Button>
</template>
