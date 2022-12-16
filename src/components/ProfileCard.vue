<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
        <v-card-text>
          <v-flex class="mb-4 profile">
            <v-avatar size="96" class="mr-4">
              <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="Avatar">
            </v-avatar>
          </v-flex>
          <v-text-field
            v-model="form.name"
            label="Name"
            :readonly="noEdit"
          ></v-text-field>
          <v-text-field
            v-model="form.surname"
            label="Surname"
            :readonly="noEdit"
          ></v-text-field>
          <v-text-field
            v-model="form.age"
            label="Age"
            :readonly="noEdit"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            label="Email Address"
            :readonly="noEdit"
          ></v-text-field>
          <v-text-field
            v-model="form.telephone"
            label="Phone Number"
            :readonly="noEdit"
          ></v-text-field>
        </v-card-text>
      </v-card>
        </v-layout>
        <transition
          mode="out-in"
          name="fade"
        >
          <v-card-actions
            v-if="noEdit === true"
            key="edit"
            class="d-flex flex-column mt-6"
          >
            <v-btn rounded color="primary" class="px-8" @click="noEdit = false">
              Edit
            </v-btn>
          </v-card-actions>
          <v-card-actions
            v-else
            key="action"
            class="d-flex mt-6"
          >
            <v-btn rounded color="primary" class="px-6" @click="resetDefault">
              cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded outlined color="primary" class="px-8" @click="updateUser">
              send
            </v-btn>
          </v-card-actions>
        </transition>
  </v-container>
</template>

<script>
import userAPI from '../services/user'

export default {
  pageTitle: 'My Profile',
  props: {
    profile: Object
  },
  data: () => ({
    form: {},
    noEdit: true
  }),
  methods: {
    async updateUser () {
      try {
        const update = {}
        if (this.form.name !== this.profile.name) update.name = this.form.name
        if (this.form.surname !== this.profile.surname) update.surname = this.form.surname
        if (this.form.age !== this.profile.age) update.age = this.form.age
        if (this.form.email !== this.profile.email) update.email = this.form.email
        if (this.form.telephone !== this.profile.telephone) update.telephone = this.form.telephone
        await userAPI.updateProfile(update)
        this.noEdit = true
      } catch (error) {
        alert(error)
      }
    },
    resetDefault () {
      this.form = Object.assign({}, this.profile)
      this.noEdit = true
    }
  },
  watch: {
    profile: {
      inmediate: true,
      deep: true,
      handler: function (val) {
        this.form = Object.assign({}, val)
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.profile {
  padding: 5px;
  background-color: #FAECD5;
  border-radius: 10px;
}
img {
  border: 3px solid #DD7225;
}
</style>
