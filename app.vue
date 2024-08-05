<script setup>
const { locale, setLocale } = useI18n()
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      <div>
        <Button @click="setLocale('en')">en</Button>
        <Button @click="setLocale('ar')" class="text-red-500">AR</Button>
        <p>{{ $t('welcome') }}</p>
      </div>
    </div>
  </div>
</template>