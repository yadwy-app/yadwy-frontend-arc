<template>
  <div class="container mx-auto py-8 flex gap-x-10 flex-col md:flex-row">
  <!-- TODO make it response -->
    <div class="w-2/3">
      <CartItems :cartItems="cartItems" />
    </div>

    <div class="w-1/3">
      <OrderSummary :cartItems="cartItems" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CartItems from "./_components/cart-items.vue";
import OrderSummary from "./_components/order-summary.vue";

const cartItems = ref([
  {
    name: 'lefse plants in a white pot',
    quantity: 2,
    price: 35,
    image: "https://i.suar.me/K48O2/m",
  },
  {
    name: 'A lily Pad',
    quantity: 3,
    price: 35,
    image: 'https://i.suar.me/QqzyJ/l',
  },
  {
    name: 'A Pottery Vase',
    quantity: 2,
    price: 35,
    image: 'https://i.suar.me/v39m4/l',
  },
]);
</script>
