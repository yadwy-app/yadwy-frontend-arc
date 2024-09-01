<script lang="ts" setup>

</script>

<template>
  <nav class="bg-[#8FB6B6] text-primary-background py-6">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex space-x-14 my-6">
        <div>
          <p class="text-lg font-bold">
            Yadawy.app
          </p>
          <p>
            Browse an array of masterpieces
            get your own , and help the local market
          </p>
          <p>
            📞 (+20) 000000000
          </p>
          <p>
            📩 example@yadawi.com
          </p>
          <p>
            📍 Street , Neighbourhood , city
            state, country
          </p>
        </div>
        <div>
          <h3>Pages</h3>
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/carrer">Career</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>
              <NuxtLink to="/faq">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms">Terms</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy">Privacy</NuxtLink>
            </li>
          </ul>

        </div>
        <div>
          <!--          // download using google play or play store-->
          <h3>Download</h3>
          <ul>
            <li>
              <NuxtLink to="/faq"> 📱Google Play</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"> 🍎 App Store</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div/>
  </nav>
</template>