<script lang="ts" setup>
import Navbar from "@/components/navbar.vue";
import Footer from "~/components/footer.vue";
</script>
<template>
  <div class="flex flex-col gap-4 font-body">
    <Navbar />

    <slot />
    <Footer />

  </div>
</template>
