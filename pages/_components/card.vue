<script setup lang="ts">
import { defineProps } from 'vue';

// Correctly define the product prop with type annotations
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
  <section>
    <NuxtImg :src="product.imageUrl" alt="new artworks" class="w-full"/>
    <div class="border-2 border-gray-300">
      <h3>{{product.name }}</h3>
      <div>
      <Icon name="tabler:jewish-star" class="w-12 h-12"/>
        <p>{{ product.averageRating }}</p>
        <p>({{ product.peopleRating }})</p>
      </div>
      <p>{{ product.price }}</p>
      <Icon name="tabler:heart" class="w-12 h-12"/>
      <Button>Add to cart</Button>
    </div>
  </section>
</template>
