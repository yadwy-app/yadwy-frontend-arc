<script setup lang="ts">
import ButtonAction from "./_components/button-action.vue";
import ProductDetails from "./_components/details.vue";
import Features from "./_components/features.vue";
import ProductImages from "./_components/product-images.vue";
import { Separator } from "@/components/ui/separator";
import { mockProductData, features } from "@/content/index";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

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
  <section class="container py-8 md:py-16" v-if="product">
    <div class="flex w-full flex-col gap-12 md:flex-row md:p-4">
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
  </section>
  <section v-else>
    <p>Product not found.</p>
  </section>
</template>
