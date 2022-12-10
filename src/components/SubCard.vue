<template>
  <v-card
    class="mx-auto"
    max-width="344"
    prepend-icon="mdi-bell"
    title="twitter"
  >
  <v-container d-flex flex-no-wrap justify-space-between>
    <img src="../assets/logos/amazon-logo.png">
    <div>
      <v-card-title>
        Amazon
      </v-card-title>
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
    </div>
    <v-card-actions>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    </v-container>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          HOLA
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
}
</script>

<style scoped>
  img {
    width: 75px;
  };
  .card {
    display: flex;
    flex-wrap: nowrap;
  }
</style>
