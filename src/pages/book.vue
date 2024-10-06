<template>
    <div>
      <h2 class="text-3xl font-bold mb-8">Прочитанные книги</h2>
  
      <div class="mt-10">
        <CardList :items="readBooks" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import CardList from '../components/CardList.vue'
  
  const readBooks = ref([]) // Список прочитанных книг
  
  // Функция для добавления книги в список прочитанных
  const handleAddBook = (book) => {
    console.log('Книга добавлена:', book) // Выводим информацию о книге
    readBooks.value.push(book) // Добавляем книгу в список прочитанных
    console.log('Список прочитанных книг:', readBooks.value) // Проверяем обновленный список
  }
  
  // Экспортируем функцию, чтобы можно было использовать её в других компонентах
  defineExpose({ handleAddBook })
  </script>
  