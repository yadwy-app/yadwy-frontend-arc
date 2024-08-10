<script setup lang="ts">
  import {defineProps} from 'vue'
  import ImageContainer from "./image-container.vue"
  defineProps({
    class: String
  })
</script>
<template >
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-center py-10" :class="class">
    <section>
      <ImageContainer >
      <NuxtImg src="/three-parts/one.svg"  alt="three parts image one"/>
      </ImageContainer>
          <h3 class="font-bold">Strength</h3>
          <p>The products we sell are durable , and authenticated by professionals</p>
    </section>
  <section>
    <ImageContainer>

    <NuxtImg src="/three-parts/two.svg"  alt="three parts image two"/>
    </ImageContainer>
    <h3 class="font-bold">Natural</h3>
    <p>Our products are natural , and made by local people which gives them support to enrich their communities </p>
  </section>
    <section>
      <ImageContainer>

    <NuxtImg src="/three-parts/three.svg"  alt="three parts image three"/>
      </ImageContainer>
    <h3 class="font-bold">Strength</h3>
    <p>The products we sell are durable , and authenticated  </p>
  </section>
  </div>
</template>
