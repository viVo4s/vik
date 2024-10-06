<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2>Вход</h2>
      <fieldset>
        <legend></legend>
        <ul>
          <li>
            <label for="email">E-mail:</label>
            <input
              v-model="email"
              type="email"
              name="mail"
              placeholder="ivanov@gmail.com"
              id="email"
              required
            />
          </li>
          <li>
            <label for="password">Пароль:</label>
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="****"
              id="password"
              maxlength="12"
              required
            />
          </li>
        </ul>
      </fieldset>
      <div v-if="error" class="form-error">
        <span>{{ error }}</span>
      </div>
      <div>
        <button type="submit">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
import { $axios } from "../config/axios"

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    }
  },

  methods: {
    async onSubmit() {
      // Проверка полей ввода
      if (this.email.trim().length < 3) {
        this.error = "Некорректная почта"
        return
      }

      if (this.password.length < 6) {
        this.error = "Короткий пароль"
        return
      }

      this.error = null

      try {
        // Получение всех пользователей из базы данных
        const response = await $axios.get("/users")
        const users = response.data

        // Проверка, есть ли введенные данные в списке пользователей
        const user = users.find(
          (u) => u.email === this.email && u.password === this.password
        )

        if (user) {
          // Успешный вход
          console.log("Успешный вход", user)

          // Сохранение email в локальном хранилище
          localStorage.setItem("loggedInUser", this.email)
          const userEmail = localStorage.getItem('loggedInUser')
          console.log(userEmail);
          

          // Здесь вы можете добавить логику для перенаправления или сохранения состояния входа
        } else {
          // Ошибка при входе
          this.error = "Неверные данные для входа"
        }
      } catch (error) {
        console.error("Ошибка при получении пользователей", error)
        this.error = "Ошибка при входе. Попробуйте снова позже."
      }
    }
  }
}
</script>

<style>
.form-error {
  color: red;
}
</style>
