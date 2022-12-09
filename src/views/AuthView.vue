<template>
  <div>
    soy la vista auth
    <LogIn v-if="isLogin" @toggleForm="toggleForm"/>
    <SignUp v-else @toggleForm="toggleForm"/>
  </div>
</template>

<script>
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
export default {
  components: {
    LogIn,
    SignUp
  },
  data () {
    return {
      isLogin: true
    }
  },
  methods: {
    toggleForm: function () {
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<style scoped>

</style>
