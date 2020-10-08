<template>
  <b-form class="login-form">
    <b-form-group id="group-name" label="Ваше имя:" label-for="name">
      <b-form-input
        id="name"
        required
        placeholder="Ваше имя"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="group-password" label="Пароль:" label-for="password">
      <b-form-input
        id="password"
        type="password"
        required
        placeholder="Пароль"
      ></b-form-input>
    </b-form-group>

    <b-button class="col-12" type="submit" variant="primary">Войти</b-button>

    <p class="text-center mt-2">или <b-link to="/signup">Зарегистрироваться</b-link></p>
  </b-form>
</template>

<script>

export default {
  name: 'LoginForm',
}
</script>


<style scoped lang="scss">
.login-form {
  width: 500px;
  margin: 0 auto;
}
</style>
