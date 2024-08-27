<script lang="ts" setup>
import LoginOrProfile from "../login-or-profile.vue";
import SearchProduct from "../search-product.vue";
import ShopWhislist from "../shop-whislist.vue";
import { Separator } from "@/components/ui/separator";
</script>
<template>
  <nav
    class="container hidden justify-between items-center py-2 font-bold sm:flex"
  >
    <NuxtLink to="/" class="text-2xl font-bold">يَدَوِيٌّ</NuxtLink>
    <section class="flex gap-2 items-center">
      <SearchProduct />
      <Separator orientation="vertical" class="h-7" />
      <ShopWhislist class="" />
      <Separator orientation="vertical" class="h-7" />
      <LoginOrProfile class="" />
    </section>
  </nav>
  <slot />
</template>
