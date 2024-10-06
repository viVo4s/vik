<template>
  <div>
    <form action="#" @submit.prevent="onSubmit">
      <h2>Регистрация</h2>
      <fieldset>
        <legend></legend>
        <ul>


        </ul>
      </fieldset>
      <fieldset>
        <legend></legend>
        <ul>
          <li>
            <label for="email">E-mail:</label>
            <input v-model="email" type="email" name="mail" placeholder="ivanov@gmail.com" id="email" required>
          </li>
          <li>
            <label for="parol">Пароль:</label>
            <input v-model="password" type="password" name="phone" placeholder="****" id="parol" maxlength="12"
              required>
          </li>

          <li>
            <label for="parol">Подтвердите пароль:</label>
            <input v-model="passwordConfirm" type="password" name="phone" placeholder="****" id="parol" maxlength="12"
              required>
          </li>
        </ul>
      </fieldset>
      <div v-if="error" class="form-error">
        <span>{{ error }}</span>
      </div>
      <div>
        <button type="submit" @click="submit">Отправить</button>
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
      passwordConfirm: "",
      error: null,
    }
  },

  methods: {
    submit() {
      // TODO: add email check.
      if (this.email.trim().length < 3) {
        this.error = "Почта"
        return
      }

      if (this.password != this.passwordConfirm) {
        this.error = "Пароли не совпадают"
        return
      }

      if (this.password.length < 6) {
        this.error = "Короткий пароль"
        return
      }

      this.error = null

      $axios.post("/users", {
        email: this.email,
        password: this.password,
      })
    }
  }
}
</script>
<style>
.form-error {
  color: red;
}
</style>