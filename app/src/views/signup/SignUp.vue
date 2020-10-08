<template>
  <b-container>
    <signup-form />
  </b-container>
</template>

<script>
import {SignUpForm} from '@/components'

export default {
  name: 'SignUp',
  metaInfo: {
    title: 'Вход'
  },
  components: {
    'signup-form': SignUpForm
  }
}
</script>

<style></style>
