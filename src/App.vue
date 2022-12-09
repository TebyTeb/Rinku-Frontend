<template>
  <v-app>
    <v-main>
      <!-- Vista del View -->
      <navBar />
      <router-view/>
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
