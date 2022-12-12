<template>
  <div>
    <v-btn style="width: 100%;">
      <img src="../assets/logos/1.png">
      <v-card-title>
        {{ this.sub.name }}
      </v-card-title>
    </v-btn>

    <!-- <v-container d-flex flex-no-wrap justify-space-between>
    <img src="../assets/logos/1.png">
    <div>
      <v-card-title>
        {{ this.sub.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ this.sub.plan.name }}
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
    </v-container> -->

  </div>
</template>

<script>
export default {
  props: {
    sub: Object
  }
}
</script>

<style scoped>
  img {
      width: 50px;
    };
</style>
