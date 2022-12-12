<template>
  <v-card-text>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        outlined
        label="Name"
        :rules="[rules.required]"
        v-model="newUser.name"
      ></v-text-field>
      <v-text-field
        outlined
        label="Surname"
        :rules="[rules.required]"
        v-model="newUser.surname"
      ></v-text-field>
      <v-text-field
        outlined
        label="Age"
        :rules="[rules.required]"
        type="number"
        v-model="newUser.age"
      ></v-text-field>
      <v-text-field
        outlined
        prepend-inner-icon="mdi-email"
        label="Email"
        :rules="[rules.required, rules.email]"
        v-model="newUser.email"
      ></v-text-field>
      <v-text-field
        outlined
        prepend-inner-icon="mdi-cellphone"
        label="Phone"
        :rules="[rules.required, rules.phone]"
        type="tel"
        v-model="newUser.telephone"
      ></v-text-field>
      <v-text-field
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        outlined
        prepend-inner-icon="mdi-lock"
        label="Password"
        :rules="[rules.required]"
        v-model="newUser.password"
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-text-field
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        outlined
        prepend-inner-icon="mdi-lock"
        label="Confirm Password"
        :rules="[rules.pwdCheck]"
        @click:append="show2 = !show2"
      ></v-text-field>
      {{valid}}
    </v-form>
    <v-card-actions class="d-flex flex-column">
      <v-btn
        color="primary"
        class="px-6 mb-5"
        rounded
        @click="signUp"
      >
      Signup
      </v-btn>
      <a @click="toggleForm">Already a member? <span style="color: #DD7225;">Log In</span></a>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import api from '@/services/api'
import { useAuthStore } from '@/stores/store'

export default {
  data () {
    return {
      valid: false,
      show1: false,
      show2: false,
      rules: {
        required: v => !!v || 'This field is required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        pwdCheck: v => v === this.newUser.password || 'passwords must match',
        phone: v => !!v || 'Wrong phone format'
      },
      newUser: {
        name: null,
        surname: null,
        age: null,
        email: null,
        telephone: null,
        password: null
      },
      store: useAuthStore()
    }
  },
  computed: {

  },
  methods: {
    toggleForm () {
      this.$emit('toggleForm')
    },
    async signUp () {
      this.$refs.form.validate()

      if (this.valid && Object.values(this.newUser).includes(null) === false) {
        const response = await api.signup(this.newUser)
        if (response.error) {
          alert('Error creating account')
        } else {
          this.store.login(response.token, response.email)
          this.$router.push({ name: 'subscription' })
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
