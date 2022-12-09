<template>
  <div>
    <h3>
      Soy la vista SignUp
    </h3>
    <v-btn @click="toggleForm">back to login</v-btn>
  </div>
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
