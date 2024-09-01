<script setup lang="ts">
import ProductCard from "../../_components/card/card.vue";

const data = [
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.pinimg.com/564x/55/0d/dc/550ddca764c80fd398d2e0c278f54ce9.jpg",
    peopleRating: 10,
  },
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.pinimg.com/564x/3d/21/ce/3d21cec1e996fe9a3e15f3d81d39134e.jpg",
    peopleRating: 10,
  },
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.pinimg.com/564x/81/21/3b/81213bcb23f95531bbddb5a6871b7245.jpg",
    peopleRating: 10,
  },
  {
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=jYsZ-tsu_UoPs-Ba1AFXsZySir58nPPfVUiftHgxq24%3D",
    peopleRating: 10,
  },
];
</script>
<template>
  <div class="container space-y-4 text-yadwy-neutral-950">
    <div class="space-y-2">
      <h3 class="text-3xl font-bold text-center">New Artworks</h3>
      <p class="text-center">
        Lorem ipsum dolor sit amet consectetur. Urna vehicula commodo various
        nibh enim id proin. Felis nibh facilisi ac non pharetra proin.
      </p>
    </div>

    <section class="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard
        v-for="product in data"
        :key="product.name"
        :product="product"
      />
    </section>
  </div>
</template>
