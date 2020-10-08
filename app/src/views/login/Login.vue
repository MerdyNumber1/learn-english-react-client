<template>
  <div class="login">
    <b-container>
      <login-form />
    </b-container>
  </div>
</template>

<script>
import {LoginForm} from '@/components'

export default {
    name: 'Login',
    metaInfo: {
        title: 'Вход'
    },
    components: {
      'login-form': LoginForm
    }
}
</script>

<style lang="">

</style>
