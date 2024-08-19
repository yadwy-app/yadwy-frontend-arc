<script setup lang="ts">
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem} from '~/components/ui/carousel'
import {defineProps} from 'vue'

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)
defineProps({
  class: String
})

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})
</script>

<template>
  <div class="group w-full sm:w-auto relative" :class="class"> <!-- Set relative positioning here -->
    <Carousel
        class="relative w-full"
        @init-api="(val) => emblaMainApi = val"
    >
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 10" :key="index">
          <div class="p-1">
            <NuxtImg src="https://i.suar.me/6AyoA/m" alt="card images" class="w-full"/>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <Carousel
        class="absolute bottom-2 left-1/2 transform -translate-x-1/2 mb-[5px] w-full max-w-md"
        @init-api="(val) => emblaThumbnailApi = val"
    >
      <CarouselContent class="flex gap-1 ml-0 justify-center">
        <CarouselItem v-for="(_, index) in 10" :key="index" class="pl-0 basis-[1/4] cursor-pointer " @click="onThumbClick(index)">
          <div class="p-1 w-fit">
            <p class="rounded-full" :class="index === selectedIndex ? 'h-5 w-8 bg-yadwy-green-900' : 'h-5 w-5 bg-yadwy-green-700'"></p>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
