<script setup lang="ts">
import ButtonAction from "./_components/button-action.vue";
import ProductDetails from "./_components/details.vue";
import Features from "./_components/features.vue";
import ProductImages from "./_components/product-images.vue";
import { Separator } from "@/components/ui/separator";
import { mockProductData, features, reviewComment } from "@/content/index";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import CustomerReviews from "./_components/reviews.vue";
import ReviewsComments from "./_components/reviews-comments.vue";
// Access the route to get the product ID
const route = useRoute();
const productId = route.params.id as string;

// Define a ref to store the product details
const product = ref<typeof mockProductData | null>(null);

// Fetch the product details when the component is mounted
onMounted(() => {
  product.value = mockProductData.find((p) => p.id === productId) || null;
});
</script>

<template>
  <section class="container flex flex-col py-8 md:py-16" v-if="product">
    <div class="flex flex-col gap-12 w-full md:flex-row md:p-4">
      <ProductImages :images="product.images" />
      <div class="flex flex-col gap-8 md:w-full">
        <ProductDetails
          :title="product.title"
          :price="product.price"
          :rate="product.rate"
          :description="product.description"
        />
        <Separator class="w-24 bg-yadwy-green-400" />
        <Features
          v-for="(feature, index) in features"
          :key="index"
          :description="feature.description"
          :icon="feature.icon"
        />
        <Separator class="w-24 bg-yadwy-green-400" />
        <ButtonAction />
      </div>
    </div>
    <div class="flex flex-col gap-8 py-4 w-full md:flex-row">
      <CustomerReviews />
      <div class="flex flex-col gap-4">
        <ReviewsComments
          v-for="(comment, index) in reviewComment"
          :key="index"
          :userName="comment.username"
          :userImage="comment.userImage"
          :rating="comment.rating"
          :reviewText="comment.reviewText"
        />
      </div>
    </div>
  </section>
  <section v-else>
    <p>Product not found.</p>
  </section>
</template>
