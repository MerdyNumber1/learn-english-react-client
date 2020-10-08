<template>
    <b-container class="mt-3">
      <b-nav pills>
        <b-nav-item to='/' exact exact-active-class="active">Главная</b-nav-item>
        <b-nav-item to='/theory' exact exact-active-class="active">Теория</b-nav-item>
        <b-nav-item to='/practice' exact exact-active-class="active">Практика</b-nav-item>
        <b-nav-item to='/signup' :active="$route.name === 'Login'" exact exact-active-class="active" class="ml-auto">Вход / Регистрация</b-nav-item>
      </b-nav>
    </b-container>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
