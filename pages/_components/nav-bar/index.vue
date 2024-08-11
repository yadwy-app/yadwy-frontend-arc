<script lang="ts" setup>
  import SearchProduct from "./search-product.vue"
  import ShopWhislist from "./shop-whislist.vue"
  import LoginOrProfile from "./login-or-profile.vue"
</script>
<template>
    <nav class="container font-bold flex items-center justify-between py-2 ">
      <NuxtLink to="/" class="text-2xl">يَدَوِيٌّ</NuxtLink>
      <section class="flex gap-x-2 items-center">
        <SearchProduct />
        <ShopWhislist class="border-s-2 border-yadwy-neutral-200" />
        <LoginOrProfile class="border-s-2 border-yadwy-neutral-200" />
      </section>
    </nav>
  <slot/>
</template>