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
        <input
          v-model="email" 
          type="email" 
          name="mail" 
          placeholder="ivanov@gmail.com" 
          id="email" 
          required
        >
      </li>
       <li>
        <label for="parol">Пароль:</label>
        <input type="parol" name="phone" placeholder="****" id="parol" maxlength="12" required>
      </li>
        
       <li>
        <label for="parol">Подтвердите пароль:</label>
        <input type="parol" name="phone" placeholder="****" id="parol" maxlength="12" required>
      </li>
    </ul>
  </fieldset>
 <div>
    <button type="submit" @click="submit">Отправить</button>
  </div>
</form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "basevika2006@as"
    }
  },

  methods: {
    submit() {
      console.log(this.email)
    }
  }
}
</script>