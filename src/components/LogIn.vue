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
        <a
          class="mb-5"
          @click="toggleForm"
        >I don't have an account yet</a>
        <v-btn
          color="primary"
          class="px-6"
          rounded
        >Login
        </v-btn>
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
