<template>
  <div>
    <v-app-bar app elevation="0" color="primary">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-spacer />
      <RouterLink :to="{ name: 'home' }">
        <div class="d-flex align-center">
          <!-- Logo de la barra de tareas -->
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../assets/Rinku.svg"
            transition="scale-transition"
            width="100"
          />
        </div>
      </RouterLink>

    </v-app-bar>

    <v-navigation-drawer fixed v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="orange--text text--orange"
        >
          <v-list-item
          @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>mdi-window-close</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item v-for="(lins,keys) in links" :key="keys" class="item-hover">
            <v-list-item-icon>
              <v-icon>{{lins.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{lins.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  data: () => ({
    drawer: false,
    group: null,
    links: [
      {
        icon: 'mdi-home',
        title: 'Home'
      },
      {
        icon: 'mdi-account-plus',
        title: 'Singup'
      },
      {
        icon: 'mdi-account-key',
        title: 'Login'
      },
      {
        icon: 'mdi-account-group',
        title: 'About us'
      },
      {
        icon: 'mdi-help-circle',
        title: 'FAQ'
      }
    ]
  }),
  components: { RouterLink }
}
</script>

<style lang="scss" scoped>
.title {
  color: white;
}.item-hover:hover {
  background-color: #faecd5;
}
</style>
