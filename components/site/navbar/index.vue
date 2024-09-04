<script lang="ts" setup>
import LoginOrProfile from "./login-or-profile.vue";
import SearchProduct from "./search-product.vue";
import ShopWishList  from "./shop-wish-list.vue";
import { Separator } from "~/components/ui/separator";
</script>
<template>
  <nav class="container">
  <section class="justify-between items-center py-2 font-bold flex">
    <NuxtLink to="/" class="text-2xl font-bold">يَدَوِيٌّ</NuxtLink>
    <section class="flex gap-2 items-center">
      <SearchProduct class="hidden md:flex"/>
      <Separator orientation="vertical" class="h-7 hidden md:block" />
      <ShopWishList  class="" />
      <Separator orientation="vertical" class="h-7" />
      <LoginOrProfile class="" />
    </section>
  </section>
      <SearchProduct class="flex md:hidden" />
  </nav>
</template>
