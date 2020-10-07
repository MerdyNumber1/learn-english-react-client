<template>
  <div id="app">
    <nav-bar />
    <router-view class="mt-5"/>
  </div>
</template>

<script>
import Nav from '@/components/nav/Nav.vue'

export default {
  components: {
    'nav-bar': Nav
  },
  metaInfo: {
    titleTemplate: '%s - Eng',
    htmlAttrs: {
        lang: 'en'
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/main';
</style>
