<template>
  <v-container>
    <div class="cartel">soy la vista auth</div>
    <LogIn v-if="isLogin" @toggleForm="toggleForm"/>
    <SignUp v-else @toggleForm="toggleForm"/>
  </v-container>
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
.cartel {
  background-color: primary;
  width: 100%;
}
</style>
