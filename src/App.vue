<template>
  <v-app>
    <v-main>
      <!-- Vista del View -->
      <navBar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    navBar
  },
  data: () => ({
    //
  })
}
</script>
