<script setup lang="ts">
import ImageContainer from "./image-container.vue";
import { defineProps } from "vue";

defineProps({
  class: String,
});
</script>
<template>
  <div
    class="grid grid-cols-1 gap-2 py-10 text-center text-yadwy-neutral-900 md:grid-cols-3"
    :class="class"
  >
    <section class="space-y-4">
      <ImageContainer>
        <NuxtImg src="/three-parts/one.svg" alt="three parts image one" />
      </ImageContainer>
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-yadwy-neutral-950">Strength</h3>
        <p>
          The products we sell are durable , and authenticated by professionals
        </p>
      </div>
    </section>
    <section class="space-y-4">
      <ImageContainer>
        <NuxtImg src="/three-parts/two.svg" alt="three parts image two" />
      </ImageContainer>
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-yadwy-neutral-950">Natural</h3>
        <p>
          Our products are natural , and made by local people which gives them
          support to enrich their communities
        </p>
      </div>
    </section>
    <section class="space-y-4">
      <ImageContainer>
        <NuxtImg src="/three-parts/three.svg" alt="three parts image three" />
      </ImageContainer>
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-yadwy-neutral-950">Strength</h3>
        <p>The products we sell are durable , and authenticated</p>
      </div>
    </section>
  </div>
</template>
