<script lang="ts" setup>
  import SearchProduct from "./search-product.vue"
  import ShopWhislist from "./shop-whislist.vue"
  import LoginOrProfile from "./login-or-profile.vue"
</script>
<template>
<!--  <section class="bg-gray-200">-->
    <nav class="container font-bold flex items-center justify-between py-2">
      <NuxtLink to="/">يَدَوِيٌّ</NuxtLink>
      <section class="flex gap-x-2">
        <SearchProduct />
        <ShopWhislist class="border-s-2 border-gray-100" />
        <LoginOrProfile class="border-s-2 border-gray-100" />
      </section>
    </nav>
  <slot/>
</template>