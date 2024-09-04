<script setup>
import NavLink from "./navlink.vue"
</script>

<template>
  <div class="container">
  <section class=" flex justify-between items-center p-4 border-t border-yadwy-neutral-900">
    <p>
      &copy; 2024 Yadwy - All Rights Reserved
    </p>
    <div>
      <ul class="flex gap-4">
        <NavLink to="/" label="Terms & Conditions"/>
        <NavLink to="/" label="Privacy Policy"/>
        <NavLink to="/" label="Cookies"/>
      </ul>
    </div>
      <ul class="flex gap-4 text-yadwy-neutral-900">
        <NavLink to="/">
        <Icon name="tabler:brand-x" class="w-6 h-4 text-white"/>
        </NavLink>
        <NavLink to="/">
            <Icon name="tabler:brand-instagram" class="w-6 h-4 text-white"/>
        </NavLink>
        <NavLink to="/">
          <Icon name="tabler:brand-facebook-filled" class="w-6 h-4 text-white"/>
        </NavLink>
        <NavLink to="/">
          <Icon name="tabler:brand-twitter" class="w-6 h-4 text-white"/>
        </NavLink>
      </ul>
  </section>
  </div>

</template>
