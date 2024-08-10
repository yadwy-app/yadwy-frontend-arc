<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

</script>

<template>

  <h2 class="text-center font-bold text-3xl">Category</h2>
  <p class="text-center">Explore a world of creativity in our store, where you will find the prettiest handcrafts</p>
  <Carousel
      class="relative w-full "
      :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-1 w-full">
      <CarouselItem v-for="(_, index) in 5" :key="index" class="pl-1 md:basis-1/2 lg:basis-1/3">
        <div class="p-1">
          <NuxtImg src="https://i.suar.me/X3zVP/m" alt="image" class="w-full"/>
          <p class="text-center w-full">Wood Work</p>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>