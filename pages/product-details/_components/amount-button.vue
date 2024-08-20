<script setup lang="ts">
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";
</script>

<template>
  <NumberField class="w-full md:w-4/5" id="age" :default-value="1" :min="0">
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>
