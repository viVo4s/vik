<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img src="/gas-kvas-com-p-biblioteka-logotip-na-prozrachnom-fone-14.png" alt="Logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">Онлайн библиотека</h2>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <router-link to="/book">
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/cart.svg" alt="Cart" />
          <span>Прочитанные книги</span>
        </li>
      </router-link>

      <router-link to="/User">
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/profile.svg" alt="Profile" />
          <span>Аккаунт</span>
        </li>
      </router-link>

      <template v-if="!isUserLoggedIn">
        <!-- Показать эти элементы, если пользователь не авторизован -->
        <router-link to="/Signup">
          <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
            <img src="/register-icon.svg" alt="Register" />
            <span>Регистрация</span>
          </li>
        </router-link>

        <router-link to="/Login">
          <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
            <img src="/login-icon.svg" alt="Login" />
            <span>Вход</span>
          </li>
        </router-link>
      </template>

      <template v-else>
        <!-- Показать дополнительные элементы, если пользователь авторизован -->
        <li @click="logout" class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/logout-icon.svg" alt="Logout" />
          <span>Выйти</span>
        </li>
      </template>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const userEmail = localStorage.getItem('loggedInUser')
const isUserLoggedIn = ref(!!userEmail) // Проверка, есть ли авторизованный пользователь

const logout = () => {
  localStorage.removeItem('loggedInUser') // Удаляем пользователя из локального хранилища
  window.location.reload() // Перезагружаем страницу или используйте Vue Router для перенаправления
}
</script>
