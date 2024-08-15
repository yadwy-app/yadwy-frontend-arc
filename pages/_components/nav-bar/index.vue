<script lang="ts" setup>
import LoginOrProfile from "./login-or-profile.vue";
import SearchProduct from "./search-product.vue";
import ShopWhislist from "./shop-whislist.vue";
</script>
<template>
  <nav class="container flex items-center justify-between py-2 font-bold">
    <NuxtLink to="/" class="text-2xl font-bold">يَدَوِيٌّ</NuxtLink>
    <section class="flex items-center gap-x-2">
      <SearchProduct />
      <ShopWhislist class="border-s-2 border-yadwy-neutral-200" />
      <LoginOrProfile class="border-s-2 border-yadwy-neutral-200" />
    </section>
  </nav>
  <slot />
</template>
