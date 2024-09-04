 <script lang="ts" setup>
  import NavLink from "./navlink.vue";
  import CopyRight from "./copy-right-.vue";
  const config = useRuntimeConfig();
  const whatsappLink = config.public.WHATSAPP_LINK;
</script>

<template>
  <footer class="bg-yadwy-green-500 mt-14 text-yadwy-neutral-800">
    <section class="container grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
    <div class="space-y-8">
      <section class="space-y-2">
        <h2 class="text-3xl font-bold text-yadwy-neutral-950">يَدَوِيٌّ</h2>
        <p>Browse an array of masterpieces get your own , and help the local market</p>
      </section>
      <section class="space-y-2">
        <div class="flex items-center gap-2">
          <Icon name="tabler:phone" class="w-6 h-6" />
          <p>{{whatsappLink}}</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="tabler:mail" class="w-6 h-6" />
          <p>example@yadawi.com</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="tabler:map-pin-filled" class="w-6 h-6" />
          <p>Street , Neighbourhood , city state, country</p>

        </div>
      </section>
    </div>
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-yadwy-neutral-950">Pages</h3>
        <ul class="space-y-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/" label="Shop" />
          <NavLink to="/" label="Categories" />
        </ul>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-yadwy-neutral-950">Company</h3>
        <ul class="space-y-1">
          <NavLink to="/" label="About us"/>
          <NavLink to="/" label="Careers"/>
          <NavLink to="/" label="Careers"/>
          <NavLink to="/" label="Community"/>
          <NavLink to="/" label="Customers"/>
          <NavLink to="/" label="Contact us"/>
        </ul>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-yadwy-neutral-950">Resources</h3>
        <ul class="space-y-1">
          <NavLink to="/" label="Support" />
          <NavLink to="/" label="Help Center" />
          <NavLink to="/" label="Preferences" />
          <NavLink to="/" label="Privacy Policy" />
          <NavLink to="/" label="Terms of use" />
        </ul>
      </div>
    </section>
    <CopyRight />
  </footer>
</template>

