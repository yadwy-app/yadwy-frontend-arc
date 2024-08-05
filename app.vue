<script setup>
const { locale, setLocale } = useI18n()
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>
      <div>
        <Button @click="setLocale('en')">en</Button>
        <Button @click="setLocale('ar')">AR</Button>
        <p>{{ $t('welcome') }}</p>
      </div>
    </div>
  </div>
</template>