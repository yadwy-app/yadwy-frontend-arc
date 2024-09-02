<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const isOpen = ref(false);

const cartItems = ref([
  { id: 1, name: "Product 1", quantity: 1, price: 100 },
  { id: 2, name: "Product 2", quantity: 2, price: 150 },
  // Add more products as needed
]);

function toggleDialog() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <Dialog v-model="isOpen">
    <DialogTrigger
      as="button"
      @click="toggleDialog"
      class="relative p-2 rounded-full bg-yadwy-neutral-50"
    >
      <Icon name="tabler:shopping-bag" class="w-4 h-4 bg-yadwy-green-900" />
      <span
        class="absolute -top-2 -right-2 px-2 text-white bg-red-500 rounded-full"
        >{{ cartItems.length }}</span
      >
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Shopping Cart</DialogTitle>
        <DialogDescription>
          Here are the products you’ve added to your cart.
        </DialogDescription>
      </DialogHeader>
      <div class="space-y-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex justify-between"
        >
          <div>{{ item.name }}</div>
          <div>{{ item.quantity }} x {{ item.price }} SAR</div>
        </div>
      </div>
      <DialogFooter>
        <DialogClose
          as="button"
          class="p-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Close
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
