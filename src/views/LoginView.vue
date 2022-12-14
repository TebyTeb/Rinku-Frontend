<template>
  <div>
    <div
      class="cartel"
    >
      <h2>Login</h2>
      <p>Welcome back</p>
    </div>
    <v-container class="logger">
      <transition
        mode="out-in"
        name="fade"
      >
        <LogIn />
      </transition>
    </v-container>
  </div>
</template>

<script>
import LogIn from '../components/LogIn.vue'
export default {
  components: {
    LogIn
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
