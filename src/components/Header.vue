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
      <li @click="() => emit('openDrawer')" class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="Cart" />
        <span>Прочитанные книги</span>
      </li>

      <router-link to="/account">
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/profile.svg" alt="Profile" />
          <span>Аккаунт</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<script setup></script>
