<script lang="ts" setup>

const config = useRuntimeConfig();
const whatsappLink = config.public.WHATSAPP_LINK
</script>
<template>
  <footer class="bg-yadwy-green-500 mt-14">
    <section class="container grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">

    <div>
      <div>
        <h2>يَدَوِيٌّ</h2>
        <p>Browse an array of masterpieces get your own , and help the local market</p>
      </div>
      <p>
        <Icon name="tabler:phone" class="w-6 h-6" /> {{whatsappLink}}</p>
      <p>
        <Icon name="tabler:mail" class="w-6 h-6" />
        example@yadawi.com</p>
      <p>
        <Icon name="tabler:map-pin-filled" class="w-6 h-6" />
        Street , Neighbourhood , city
        state, country</p>
    </div>
      <div>
        <h2>Pages</h2>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">Shop</NuxtLink></li>
          <li><NuxtLink to="/">Categories</NuxtLink></li>
          <li><NuxtLink to="/">Contact Us</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h2>Company</h2>
        <ul>
          <li><NuxtLink to="/">About us</NuxtLink></li>
          <li><NuxtLink to="/">Careers</NuxtLink></li>
          <li><NuxtLink to="/">Community</NuxtLink></li>
          <li><NuxtLink to="/">Customers</NuxtLink></li>
          <li><NuxtLink to="/">Contact us</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h2>Resources</h2>
        <ul>
          <li><NuxtLink to="/">Support</NuxtLink></li>
          <li><NuxtLink to="/">Help Center</NuxtLink></li>
          <li><NuxtLink to="/">Preferences</NuxtLink></li>
          <li><NuxtLink to="/">Privacy Policy</NuxtLink></li>
          <li><NuxtLink to="/">Terms of use</NuxtLink></li>
        </ul>
        
      </div>

    </section>
  </footer>
</template>