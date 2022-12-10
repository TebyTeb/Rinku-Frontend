<template>
      <v-card-text>
      <v-form>
        <v-text-field
          outlined
          label="Name"
        ></v-text-field>
        <v-text-field
          outlined
          label="Surname"
        ></v-text-field>
        <v-text-field
          outlined
          label="Age"
          type="number"
        ></v-text-field>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-email"
          label="Email"
        ></v-text-field>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-cellphone"
          label="Phone"
          type="tel"
        ></v-text-field>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-lock"
          label="Password"
        ></v-text-field>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-lock"
          label="Confirm Password"
        ></v-text-field>
      </v-form>
      <v-card-actions
        class="d-flex flex-column"
      >
        <a
          class="mb-5"
          @click="toggleForm"
        >I already have an account</a>
        <v-btn
          color="primary"
          class="px-6"
          rounded
        >Signup
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
