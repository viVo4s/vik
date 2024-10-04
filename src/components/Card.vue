<script setup>
defineProps({
  id: Number,
  title: String,
  image: String,
  author: String
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img :src="image" />
    <p class="mt-2">{{ title }}</p>
    <p>{{ author }}</p>
  </div>
</template>
