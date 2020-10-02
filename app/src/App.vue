<template>
  <div id="app">
    <b-container class="mt-3">
      <b-nav pills>
        <b-nav-item active>Главная</b-nav-item>
        <b-nav-item>Теория</b-nav-item>
        <b-nav-item>Практика</b-nav-item>
        <b-nav-item class="ml-auto">Вход</b-nav-item>
      </b-nav>
    </b-container>
    <router-view class="mt-5"/>
  </div>
</template>

<style lang="scss">
</style>
