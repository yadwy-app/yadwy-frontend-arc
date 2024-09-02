<template>
  <div>
    <h1 class="mb-6 text-3xl font-bold">Shopping Cart</h1>
    <div
      v-for="(item, index) in cartItems"
      :key="index"
      class="py-4 w-full border-b"
    >
      <div class="flex gap-2 w-full">
        <img
          :src="item.image"
          alt="Product Image"
          class="object-cover w-24 h-24 rounded"
        />
        <div class="flex flex-col gap-2 w-full">
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <p class="text-sm text-gray-500">
            {{ item.quantity }}x ${{ item.price }}
          </p>
          <div class="flex gap-x-2 items-center text-black w-1/3">
           <AmountButton />
            <Button @click="removeItem(index)"
 class="rounded bg-transparent text-black"
            >
              Remove
            </Button>
          </div>
        </div>
        <span class="text-lg font-bold">${{ item.price * item.quantity }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";
import { Button } from "@/components/ui/button";
import AmountButton from "../../_components/amount-button.vue";

const props = defineProps({
  cartItems: Array,
});

const increaseQuantity = (index) => {
  props.cartItems[index].quantity++;
};

const decreaseQuantity = (index) => {
  if (props.cartItems[index].quantity > 1) {
    props.cartItems[index].quantity--;
  }
};

const removeItem = (index) => {
  props.cartItems.splice(index, 1);
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
