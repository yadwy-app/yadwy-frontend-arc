<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
</script>

<template>
  <Carousel
    class="relative w-full container"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-1 w-full  ">
      <CarouselItem
        v-for="(_, index) in 8"
        :key="index"
        class="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
      >
        <div class="space-y-2 p-1">
          <NuxtImg
            src="https://i.suar.me/QqzyJ/l"
            alt="image"
            class="w-full aspect-[2/3] rounded-md shadow-lg shadow-yadwy-neutral-400"
          />
          <p class="w-full text-center font-bold text-yadwy-neutral-900">
            Wood Work
          </p>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
