<template>
  <!-- <div>
    <h3>
      Soy la vista LogIn
    </h3>
    <v-btn @click="toggleForm">change to signup</v-btn>
  </div> -->
  <v-card>
    <v-card-title primary-title>
      <h2>Login</h2>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          filled
          prepend-icon="mdi-email"
          label="Email"
        ></v-text-field>
        <v-text-field
          filled
          prepend-icon="mdi-lock"
          label="Password"
          id="password"
        ></v-text-field>
      </v-form>
      <v-card-actions
        class="d-flex flex-column"
      >
        <a
          class="mb-5"
          @click="toggleForm"
        >Don't have an account yet?</a>
        <v-btn color="primary">Login</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
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
