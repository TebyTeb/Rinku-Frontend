<template>
    <v-card-text>
      <v-form>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-email"
          label="Email"
        ></v-text-field>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-lock"
          label="Password"
          id="password"
        ></v-text-field>
      </v-form>
      <v-card-actions
        class="d-flex flex-column"
      >
      <v-btn
      color="primary"
      class="px-6 mb-5"
      rounded
      >Login
    </v-btn>
    <a
      @click="toggleForm"
    >Don't have an account? - <span style="color: #DD7225;">Sign Up</span></a>
      </v-card-actions>
    </v-card-text>
</template>

<script>
export default {
  methods: {
    toggleForm () {
      this.$emit('toggleForm')
    }
  }
}
</script>

<style scoped>

</style>
