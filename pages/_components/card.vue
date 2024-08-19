<script setup lang="ts">
import { defineProps } from 'vue';
import Rating from "./rating.vue"
 defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      price: '',
      stock: '',
      averageRating: '',
      imageUrl: '',
      peopleRating: 0,
    }),
  },
});
</script>
<template>
  <section class="shadow-md bg-white text-yadwy-neutral-900">
    <NuxtImg :src="product.imageUrl" alt="new artworks" class="w-full rounded-t-md"/>
    <div class="border-2 border-yadwy-neutral-200 border-t-0 py-2 px-4 rounded-b-md ">
      <h3 class="text-lg font-bold">{{product.name }}</h3>
      <Rating :product="{peopleRating: product.peopleRating, averageRating: product.averageRating}" />
      <div class="flex  justify-between">
        <p class="font-bold text-2xl">{{ product.price }}</p>
        <div class="inline-flex gap-2 items-center h-full">
          <div class="bg-yadwy-neutral-50 flex items-center justify-center  px-2 rounded-sm h-full">
              <Icon name="tabler:heart" class="w-6 h-6"/>
          </div>
          <Button >Add to cart</Button>
        </div>
      </div>
    </div>
  </section>
</template>
