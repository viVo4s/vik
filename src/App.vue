<script setup>
import Header from './components/Header.vue'

</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />

    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>
