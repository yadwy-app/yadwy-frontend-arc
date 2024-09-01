<script setup>
import Category from "./home/categories/index.vue";
import Hero from "./home/hero/hero.vue";
import HotWorks from "./home/hot-artworks/index.vue";
import ArtWorks from "~/pages/home/new-artworks/index.vue";
</script>
<template>
  <main class="space-y-16">
    <Hero class="container" />
    <Category />
    <ArtWorks />
    <HotWorks />
  </main>
</template>
