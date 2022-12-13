<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
        <v-card-text>
          <v-flex class="mb-4">
            <v-avatar size="96" class="mr-4">
              <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="Avatar">
            </v-avatar>
          </v-flex>
          <v-text-field
            v-model="form.name"
            label="Name"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.surname"
            label="Surname"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.age"
            label="Age"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            label="Email Address"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="form.telephone"
            label="Phone Number"
            readonly
          ></v-text-field>
        </v-card-text>
      </v-card>
        </v-layout>
        <v-card-actions class="d-flex flex-column mt-6">
          <v-btn disabled rounded color="primary" class="px-8">
            Edit
          </v-btn>
        </v-card-actions>
  </v-container>
</template>

<script>
export default {
  pageTitle: 'My Profile',
  props: {
    profile: Object
  },
  watch: {
    profile: {
      inmediate: true,
      deep: true,
      handler: function (val) {
        this.form = Object.assign({}, val)
      }
    }
  },
  data () {
    return {
      form: {}
    }
  }
}
</script>
