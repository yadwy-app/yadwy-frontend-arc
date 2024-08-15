<script setup lang="ts">
import ProductCard from "../card.vue"
const data = [
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.suar.me/K48O2/m",
    peopleRating: 10
  },
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.suar.me/K48O2/m",
    peopleRating: 10
  },
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.suar.me/K48O2/m",
    peopleRating: 10
  }
]
</script>
<template>
  <section class="container">

  <h3>Hot Artworks</h3>
  <p>Lorem ipsum dolor sit amet consectetur. Urna vehicula commodo varius nibh enim id proin.
    Felis nibh facilisi ac non pharetra proin.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <ProductCard v-for="product in data" :key="product.name" :product="product" />
    </div>
  </section>

</template>