<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img :src="image" />
    <p class="mt-2">{{ title }}</p>
    <p>{{ author }}</p>
    <button 
      @click="addBook" 
      class="mt-4 bg-green-500 text-white rounded-md px-4 py-2"
    >
      Добавить в прочитанные
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  image: String,
  author: String
})

const emit = defineEmits(['addBook'])

const addBook = () => {
  const book = {
    id: props.id,
    title: props.title,
    image: props.image,
    author: props.author,
    date: new Date().getTime() // Добавляем текущую дату
  }
  
  console.log('Книга к добавлению:', book) // Проверяем, какая книга добавляется
  emit('addBook', book) // Вызываем событие добавления книги
}
</script>
