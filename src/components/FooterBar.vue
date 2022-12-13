<template>
  <v-footer color="#E39144" padless absolute>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Rinku</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
.text-center {
  color: white;
}
</style>
