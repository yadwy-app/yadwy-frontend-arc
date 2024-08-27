<script setup>
import { Button } from "@/components/ui/button";
import { defineProps } from "vue";

defineProps({
  class: String,
});
</script>
<template>
  <Button class="bg-yadwy-green-500 hover:bg-yadwy-green-600">Login</Button>
</template>
