<script setup lang="ts">
import ProductCard from "../../_components/card.vue";

const data = [
  {
    id: "1",
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.suar.me/QqzyJ/l",
    peopleRating: 10,
  },
  {
    id: "2",
    name: "New Artworks",
    price: "$ 10.00",
    stock: "In Stock",
    averageRating: "4.5",
    imageUrl: "https://i.pinimg.com/564x/3d/21/ce/3d21cec1e996fe9a3e15f3d81d39134e.jpg",
    peopleRating: 10,
  },
  {
    id: "3",
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
  <section class="container space-y-4 text-yadwy-neutral-950">
    <div class="space-y2">
      <h3 class="text-3xl font-bold text-center">Hot Artworks</h3>
      <p class="text-center">
        Lorem ipsum dolor sit amet consectetur. Urna vehicula commodo various
        nibh enim id proin. Felis nibh facilisi ac non pharetra proin.
      </p>
    </div>

    <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
      <ProductCard
        v-for="product in data"
        :key="product.name"
        :product="product"
      />
    </div>
  </section>
</template>
