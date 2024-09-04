<script setup>
defineProps({
  label: String,
  to:String,
})

</script>

<template>
    <li>
      <NuxtLink :to="to" class="text-yadwy-neutral-900">
        {{ label }}
        <slot />
      </NuxtLink>
    </li>

</template>