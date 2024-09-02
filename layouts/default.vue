<script lang="ts" setup>
import Navbar from "~/components/site/navbar/index.vue";
import Footer from "~/components/site/footer/index.vue";

</script>
<template>
  <div class="flex flex-col gap-4 font-body">
    <Navbar />
    <slot />
    <Footer />

  </div>
</template>
