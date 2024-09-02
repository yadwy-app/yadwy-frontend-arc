<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Order Summary</h2>
    <div class="space-y-4">
      <div class="flex justify-between gap-4">
        <input type="text" placeholder="Enter Coupon code" class="border p-2 rounded w-full" />
        <Button
         class="bg-yadwy-green-500 hover:bg-yadwy-green-600">Apply</button>
      </div>
      <div class="flex justify-between">
        <span>SubTotal</span>
        <span>${{ subTotal }}</span>
      </div>
      <div class="flex justify-between">
        <span>Discount</span>
        <span>$15</span>
      </div>
      <div class="flex justify-between">
        <span>Shipping</span>
        <span class="text-green-500">Free</span>
      </div>
      <div class="flex justify-between">
        <span>Taxes</span>
        <span>$0.0</span>
      </div>
      <div class="border-t flex justify-between font-bold bg-yadwy-green-100 p-2">
        <span>Total</span>
        <span>${{ total }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-500 text-sm">Estimated Delivery</span>
        <p class="font-semibold">02 May, 2024</p>
      </div>
      <button class="w-full py-3 mt-6 bg-yadwy-green-500 hover:bg-yadwy-green-600 text-white rounded">Proceed to Checkout</button>
      <p class="text-center mt-4 text-gray-500">Or</p>
      <button class="w-full py-3 mt-2 bg-gray-100 rounded">Continue Shopping</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { Button } from "@/components/ui/button";
const props = defineProps({
  cartItems: Array
});

const subTotal = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
});

const total = computed(() => {
  return subTotal.value - 15; // Assuming a fixed discount of $15
});
</script>


