<script setup>
import Category from "./_components/categories/index.vue";
import Hero from "./_components/hero/hero.vue";
import HotWorks from "./_components/hot-artworks/index.vue";
import ArtWorks from "~/pages/_components/new-artworks/index.vue";
</script>
<template>
  <main class="space-y-12">
    <Hero class="container" />
    <Category />
    <ArtWorks />
    <HotWorks />
  </main>
</template>
