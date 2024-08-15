<script setup lang="ts">
import ProductCard from "../card.vue";

const data = [
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.suar.me/K48O2/m",
    peopleRating: 10,
  },
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.suar.me/K48O2/m",
    peopleRating: 10,
  },
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.suar.me/K48O2/m",
    peopleRating: 10,
  },
];
</script>
<template>
  <div class="container">
    <h3 class="text-center text-2xl font-bold">New Artworks</h3>
    <p class="text-center">
      Lorem ipsum dolor sit amet consectetur. Urna vehicula commodo varius nibh
      enim id proin. Felis nibh facilisi ac non pharetra proin.
    </p>

    <section class="grid grid-cols-1 gap-2 md:grid-cols-3">
      <ProductCard
        v-for="product in data"
        :key="product.name"
        :product="product"
      />
    </section>
  </div>
</template>
