<template>
    <v-card-text>
      <v-form>
        <v-text-field
          outlined
          prepend-inner-icon="mdi-email"
          label="Email"
          v-model="loginData.email"
        ></v-text-field>
        <v-text-field
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          outlined
          prepend-inner-icon="mdi-lock"
          label="Password"
          v-model="loginData.password"
          @click:append="show = !show"
        ></v-text-field>
      </v-form>
      <v-card-actions
        class="d-flex flex-column"
      >
      <v-btn
      color="primary"
      class="px-6 mb-5"
      rounded
      @click.prevent="login"
      >Login
    </v-btn>
    <a
      @click="toggleForm"
    >Don't have an account? <span style="color: #DD7225;">Sign Up</span></a>
      </v-card-actions>
    </v-card-text>
</template>

<script>
import API from '../services/api.js'
import { useAuthStore } from '../stores/store'
export default {
  data () {
    return {
      show: false,
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      const response = await API.login(this.loginData)
      if (response.error) {
        alert('wrong username/password') // No funciona
      } else {
        useAuthStore().login(response.token, response.email)
        this.loginData.email = ''
        this.loginData.password = ''
        this.$router.push({ name: 'subscription' })
      }
    },
    toggleForm () {
      this.$emit('toggleForm')
    }
  }
}
</script>

<style scoped>

</style>
