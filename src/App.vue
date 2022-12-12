<template>
  <v-app>
    <v-main>
      <!-- Vista del View -->
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
  },
  data: () => ({
    //
  })
}
</script>

<style scoped>
.view {
  margin-bottom: 50px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
