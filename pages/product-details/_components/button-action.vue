<script setup lang="ts">
import AmountButton from "../../_components/amount-button.vue";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Define a method to show an alert
const showAlert = (message: string) => {
  alert(message);
};
</script>

<template>
  <div class="flex w-full flex-col items-center gap-4 md:flex-row">
    <AmountButton />
    <Button class="flex w-full gap-4" @click="showAlert('Added to cart!')">
      <Icon name="tabler:shopping-bag-plus" />
      Add to cart
    </Button>
    <Separator class="w-4" label="Or" />
    <Button class="flex w-full gap-4" @click="showAlert('Added to cart!')">
      <Icon name="tabler:shopping-cart-dollar" />
      Make your order
    </Button>
  </div>
</template>
