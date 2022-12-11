<template>
      <v-card-text>
      <v-form>
        <v-text-field
          outlined
          label="Name"
          v-model="newUser.name"
        ></v-text-field>
        <v-text-field
          outlined
          label="Surname"
          v-model="newUser.surname"
        ></v-text-field>
        <v-text-field
          outlined
          label="Age"
          type="number"
          v-model="newUser.age"
        ></v-text-field>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-email"
          label="Email"
          v-model="newUser.email"
        ></v-text-field>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-cellphone"
          label="Phone"
          type="tel"
          v-model="newUser.phone"
        ></v-text-field>
        <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          outlined
          prepend-inner-icon="mdi-lock"
          label="Password"
          v-model="newUser.password"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show2 ? 'text' : 'password'"
          outlined
          prepend-inner-icon="mdi-lock"
          label="Confirm Password"
          @click:append="show2 = !show2"
        ></v-text-field>
      </v-form>
      <v-card-actions
        class="d-flex flex-column"
      >
      <v-btn
      color="primary"
      class="px-6 mb-5"
      rounded
      >Signup
    </v-btn>
    <a
      @click="toggleForm"
    >Already a member? <span style="color: #DD7225;">Log In</span></a>
      </v-card-actions>
    </v-card-text>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false,
      newUser: {
        name: '',
        surname: '',
        age: '',
        email: '',
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    toggleForm () {
      this.$emit('toggleForm')
    }
  }
}
</script>

<style scoped>

</style>
