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
          <v-list-item v-for="(link,keys) in links" :key="keys" class="item-hover">
            <RouterLink :to=link.name class="links">
              <v-list-item-icon>
                <v-icon>{{link.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </RouterLink>
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
        name: '/',
        icon: 'mdi-home',
        title: 'Home'
      },
      {
        name: 'signup',
        icon: 'mdi-account-plus',
        title: 'Signup'
      },
      {
        name: 'login',
        icon: 'mdi-account-key',
        title: 'Login'
      },
      {
        name: 'about',
        icon: 'mdi-account-group',
        title: 'About us'
      },
      {
        name: 'FAQ',
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
.links{
  text-decoration: none;
  display: flex;
}
</style>
