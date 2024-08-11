<script setup lang="ts">
  import {defineProps} from 'vue'
  import ImageContainer from "./image-container.vue"
  defineProps({
    class: String
  })
</script>
<template >
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-center py-10 text-yadwy-neutral-900" :class="class">
    <section class="space-y-4">
      <ImageContainer >
          <NuxtImg src="/three-parts/one.svg"  alt="three parts image one"/>
        </ImageContainer>
        <div class="space-y-2">
            <h3 class="font-bold text-yadwy-neutral-950 text-xl">Strength</h3>
            <p>The products we sell are durable , and authenticated by professionals</p>
        </div>
    </section>
  <section class="space-y-4">
    <ImageContainer>

    <NuxtImg src="/three-parts/two.svg"  alt="three parts image two"/>
    </ImageContainer>
    <div class="space-y-2">
      <h3 class="font-bold text-yadwy-neutral-950 text-xl">Natural</h3>
      <p>Our products are natural , and made by local people which gives them support to enrich their communities </p>
    </div>
  </section>
    <section class="space-y-4">
      <ImageContainer>

    <NuxtImg src="/three-parts/three.svg"  alt="three parts image three"/>
      </ImageContainer>
      <div class="space-y-2">

    <h3 class="font-bold text-yadwy-neutral-950 text-xl">Strength</h3>
    <p>The products we sell are durable , and authenticated  </p>
      </div>
  </section>
  </div>
</template>
