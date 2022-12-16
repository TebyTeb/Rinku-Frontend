<template>
  <v-app>
    <v-main>
      <navBar />
      <transition
        mode="out-in"
        name="fade"
      >
        <router-view class="view"/>
      </transition>
      <footerBar />
    </v-main>
  </v-app>
</template>

<script>
import navBar from './components/NavBar.vue'
import footerBar from './components/FooterBar.vue'
export default {
  name: 'App',
  components: {
    navBar,
    footerBar
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap');
.view {
  margin-bottom: 100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
