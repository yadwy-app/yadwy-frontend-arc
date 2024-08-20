<!-- <script setup lang="ts"> -->
<!-- import { defineProps } from "vue"; -->
<!---->
<!-- // Define the props for the component -->
<!-- const props = defineProps<{ -->
<!--   images: string[]; -->
<!-- }>(); -->
<!-- </script> -->
<!---->
<!-- <template> -->
<!--   <div class="image-gallery"> -->
<!--     <div -->
<!--       v-for="(image, index) in props.images" -->
<!--       :key="index" -->
<!--       class="flex flex-row gap-4" -->
<!--     > -->
<!--       <NuxtImg :src="image" :alt="'Image ' + (index + 1)" class="w-96 h-96" /> -->
<!--     </div> -->
<!--   </div> -->
<!-- </template> -->

<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { watchOnce } from "@vueuse/core";
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps<{
  images: string[];
}>();

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

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

<template class="">
  <div class="flex flex-col gap-4 md:w-3/5">
    <Carousel class="relative w-full" @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent>
        <CarouselItem v-for="(image, index) in props.images" :key="index">
          <NuxtImg
            :src="image"
            :alt="'Image ' + (index + 1)"
            class="w-full rounded-md bg-contain"
          />
          <!-- <span class="text-4xl font-semibold">{{ index + 1 }}</span> -->
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <Carousel class="relative" @init-api="(val) => (emblaThumbnailApi = val)">
      <CarouselContent class="ml-0 flex gap-2">
        <CarouselItem
          v-for="(image, index) in props.images"
          :key="index"
          class="basis-1/4 cursor-pointer pl-0"
          @click="onThumbClick(index)"
        >
          <div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
            <NuxtImg
              :src="image"
              :alt="'Image ' + (index + 1)"
              class="w-full rounded-md bg-contain"
            />
            <!-- <span class="text-4xl font-semibold">{{ index + 1 }}</span> -->
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
