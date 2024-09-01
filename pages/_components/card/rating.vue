<script setup>
  import {defineProps} from 'vue'
  defineProps({
    product: Object,
    default: () => ({
      averageRating: 0,
      peopleRating: 0,
    })
  })
</script>
<template>
 <div class="flex items-center rounded-sm  text-[#FEE440] w-fit h-9">
   <div class="bg-[#FEE440] rounded-s-md h-full p-1 flex items-center">
      <Icon name="tabler:jewish-star" class="w-6 h-4 text-white"/>
   </div>
   <div class="bg-[#FFFBF1] flex items-center gap-2 px-2  h-full rounded-e-md">
    <p class="font-bold">{{ product.averageRating }}/5</p>
    <p>({{ product.peopleRating }})</p>
   </div>
  </div>
</template>