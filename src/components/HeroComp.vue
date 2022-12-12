<template>
  <div class="bar">
    <div class="foo">
      <span class="hero"
        >Bienvenido a nuestro servicio de gestion de subcripciones</span
      >
      <div class="logandsign">
        <RouterLink :to="{ name: 'auth'}"><v-btn color="warning" dark> Create an account </v-btn></RouterLink>
        <RouterLink :to="{ name: 'auth'}">Already a member?</RouterLink>

      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink }
}
</script>

<style lang="scss" scoped>
.foo {
  background-color: rgba(0, 0, 0, 0.7);
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.bar {
  background-image: url(../assets/homeImage.jpg);
  background-size: cover;
}
.hero {
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0 20px 0 20px;
}
.logandsign {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  text-decoration: none;
}
</style>
