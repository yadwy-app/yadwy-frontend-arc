<script setup>
import Carousel from "./carousel.vue";
import ThreeParts from "./three-parts.vue";
</script>
<template>
  <section class="space-y-6 text-yadwy-neutral-700">
    <div class="space-y-5">
      <div class="space-y-2">
        <h2 class="text-center text-3xl font-bold">Category</h2>
        <p class="text-center">
          Explore a world of creativity in our store, where you will find the
          prettiest handcrafts
        </p>
      </div>
      <Carousel />
    </div>
    <ThreeParts class="container" />
  </section>
</template>
