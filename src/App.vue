<template>
  <v-app>
    <!-- Barra de tareas -->
    <v-app-bar
      app
      color="primary"
      dark
    >
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

      <v-spacer></v-spacer>

      <v-btn
        class="mx-2"
        elevation="2"
        rounded
      >
      LOGIN
      </v-btn>
      <v-btn
        class="mx-2"
        elevation="2"
        rounded
      >
      SIGNUP
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- Vista del View -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
