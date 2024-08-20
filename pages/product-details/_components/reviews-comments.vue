<template>
  <div class="flex gap-4 items-start p-6 w-full bg-white rounded-lg shadow-lg">
    <NuxtImg
      :src="userImage"
      alt="User Avatar"
      class="w-12 h-12 rounded-full"
    />

    <div class="flex-1">
      <div class="flex justify-between items-center mb-2">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">{{ userName }}</h3>
          <div class="flex items-center">
            <span
              v-for="(star, index) in 5"
              :key="index"
              class="text-yellow-500"
            >
              <template v-if="index < rating">★</template>
              <template v-else>☆</template>
            </span>
          </div>
        </div>
        <button class="text-gray-300 hover:text-red-500">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>
      <p class="text-gray-600">
        {{ reviewText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  props: {
    userName: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
  },
};
</script>
