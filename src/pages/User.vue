<template>
    <div class="profile-container">
      <h1 class="text-2xl font-bold mb-4">Профиль пользователя</h1>
      <div class="profile-info">
        <p class="text-lg"><strong>Email:</strong> {{ email }}</p>
      </div>
      <div>
        <router-link to="/">Вернуться на главную</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const email = ref('') // Создаем реактивную переменную для email
  
  onMounted(() => {
    const storedEmail = localStorage.getItem('loggedInUser') // Получаем email из локального хранилища
    email.value = storedEmail ? storedEmail : 'Не авторизован' // Если email существует, выводим его, иначе показываем, что пользователь не авторизован
  })
  </script>
  
  <style scoped>
  .profile-container {
    padding: 20px;
  }
  </style>
  