<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :image="item.image"
      :author="item.author"
      @addClick="handleAddClick(item)"  
    />
  </div>
</template>

<script setup>
import Card from './Card.vue'

defineProps({
  items: Array,
})

// Получаем функцию добавления книги через emit
const emit = defineEmits(['addBook'])

// Обработчик события нажатия на кнопку "Добавить в прочитанные"
const handleAddClick = (book) => {
  emit('addBook', book) // Вызываем событие
}
</script>
