<script setup lang="ts">
import { watchOnce } from "@vueuse/core";
import { ref } from "vue";
import { defineProps } from "vue";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);
defineProps({
  class: String,
});

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
  emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;

  onSelect();
  emblaMainApi.on("select", onSelect);
  emblaMainApi.on("reInit", onSelect);
});
</script>

<template>
  <div class="group relative w-full sm:w-auto" :class="class">
    <!-- Set relative positioning here -->
    <Carousel class="relative w-full" @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 10" :key="index">
          <div class="p-1">
            <NuxtImg
              src="https://i.suar.me/6AyoA/m"
              alt="card images"
              class="w-full"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <Carousel
      class="mt-1.5 sm:mt-0 sm:absolute bottom-2 left-1/2 mb-[5px] w-full max-w-[200px] sm:max-w-[300px] -translate-x-1/2 transform overflow-hidden"
      @init-api="(val) => (emblaThumbnailApi = val)"
    >
      <CarouselContent class="ml-0 flex justify-center gap-1">
        <CarouselItem
          v-for="(_, index) in 10"
          :key="index"
          class="basis-1/7 cursor-pointer pl-0"
          @click="onThumbClick(index)"
        >
          <div class="w-fit p-1">
            <p
              class="rounded-full"
              :class="
                index === selectedIndex
                  ? 'h-1 w-2 sm:h-3 sm:w-6 bg-yadwy-green-900'
                  : 'h-1 w-1 sm:h-3 sm:w-3 bg-yadwy-green-700'
              "
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
