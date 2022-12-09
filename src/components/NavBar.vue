<template>
  <div>
    <v-app-bar app color="#DD7225">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-spacer />
      <div class="d-flex align-center">
        <!-- Logo de la barra de tareas -->
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-toolbar-title class="title">Rinku</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer fixed v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-window-close</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item class="item-hover">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item class="item-hover">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Singup</v-list-item-title>
          </v-list-item>
          <v-list-item class="item-hover">
            <v-list-item-icon>
              <v-icon>mdi-account-key</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item class="item-hover">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item>
          <v-list-item class="item-hover">
            <v-list-item-icon>
              <v-icon>mdi-help-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  })
}
</script>

<style lang="scss" scoped>
.title {
  color: white;
}

.item-hover:hover {
 background-color: aquamarine;
}
</style>
