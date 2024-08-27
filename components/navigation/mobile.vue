<script lang="ts" setup>
import LoginOrProfile from "../login-or-profile.vue";
import SearchProduct from "../search-product.vue";
import ShopWhislist from "../shop-whislist.vue";
import { Separator } from "@/components/ui/separator";
</script>
<template>
  <div class="container flex flex-col gap-4 p-2 w-full h-full sm:hidden">
    <nav class="flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">يَدَوِيٌّ</NuxtLink>
      <section class="flex gap-2 items-center">
        <Separator orientation="vertical" class="h-7" />
        <ShopWhislist class="" />
        <Separator orientation="vertical" class="h-7" />
        <LoginOrProfile class="" />
      </section>
    </nav>
    <SearchProduct />
  </div>
  <slot />
</template>
