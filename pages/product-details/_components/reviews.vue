<template>
  <div class="p-4 w-full bg-white rounded-lg shadow-lg md:w-2/5 h-fit">
    <h2 class="mb-4 text-xl font-semibold">Customer Reviews</h2>
    <p class="mb-2 text-gray-600">{{ totalReviews }} reviews</p>
    <div
      v-for="(rating, index) in ratings"
      :key="index"
      class="flex items-center mb-2"
    >
      <span class="text-yellow-500">★</span>
      <div class="overflow-hidden flex-grow ml-2 h-2 bg-gray-200 rounded-full">
        <div
          class="h-full bg-yellow-400"
          :style="{ width: `${rating.percentage}%` }"
        ></div>
      </div>
      <span class="ml-3 text-gray-600">{{ rating.percentage }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalReviews: 64,
      // TODO => make this dynimac
      ratings: [
        { stars: 5, percentage: 52 },
        { stars: 4, percentage: 30 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 7 },
        { stars: 1, percentage: 15 },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
