<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

</script>

<template>
  <Carousel
      class="relative w-full "
      :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-1 w-full">
      <CarouselItem v-for="(_, index) in 5" :key="index" class="pl-1 md:basis-1/2 lg:basis-1/3">
        <div class="p-1 space-y-2">
          <NuxtImg src="https://i.suar.me/K48O2/m" alt="image" class="w-full shadow-md shadow-yadwy-neutral-500 rounded-md"/>
          <p class="text-center w-full text-yadwy-neutral-900 font-bold">Wood Work</p>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>