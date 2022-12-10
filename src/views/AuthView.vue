<template>
  <div>
    <div
      v-if="isLogin"
      class="cartel"
    >
      <h2>Login</h2>
      <p>Welcome back</p>
    </div>
    <div
      v-else
      class="cartel"
    >
      <h2>Signup</h2>
      <p>Create your account</p>
    </div>
    <v-container class="logger">
      <LogIn v-if="isLogin" @toggleForm="toggleForm" />
      <SignUp v-else @toggleForm="toggleForm" />
    </v-container>
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
.cartel {
  position: fixed;
  z-index: 1;
  padding-left: 1rem;
  background-color: #DD7225;
  color: white;
  width: 100%;
  height: 65px;
  border-radius: 0 0 5rem 0;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.59);
}

.logger {
  padding-top: 100px;
}
</style>
