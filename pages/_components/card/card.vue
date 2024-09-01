<script setup lang="ts">
import { defineProps } from "vue";
import Rating from "./rating.vue";

// Correctly define the product prop with type annotations
defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      id: "",
      name: "",
      price: "",
      stock: "",
      averageRating: "",
      imageUrl: "",
      peopleRating: 0,
    }),
  },
});
</script>
<template>
  <section class="bg-white shadow-lg shadow-yadwy-neutral-200 text-yadwy-neutral-900 rounded-md">
    <NuxtLink :to="`/product-details/${product.id}`" >
        <NuxtImg
          :src="product.imageUrl"
          alt="new artworks"
          class="w-full rounded-t-md aspect-[4/3]"
        />
    </NuxtLink>
      <div
        class="py-3 px-4 rounded-b-md space-y-2 "
      >
        <h3 class="text-lg font-semibold text-ellipsis">{{ product.name }}</h3>
        <Rating
          :product="{
            peopleRating: product.peopleRating,
            averageRating: product.averageRating,
          }"
        />
        <div class="flex justify-between">
          <p class="text-xl font-semibold">{{ product.price }}</p>
          <div class="inline-flex gap-2 items-center h-full">
            <div
              class="flex justify-center items-center p-2 h-full rounded-sm bg-yadwy-neutral-50"
            >
              <Icon name="tabler:heart" class="w-6 h-6" />
            </div>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
  </section>
</template>
