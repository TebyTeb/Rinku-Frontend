<template>
  <div>
    <h3>
      Soy la vista LogIn
    </h3>
    <v-btn @click="toggleForm">change to signup</v-btn>
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
