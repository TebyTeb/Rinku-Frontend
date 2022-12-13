<template>
  <div>
    <div
      class="cartel"
    >
      <h2>Profile</h2>
      <p>Hello, {{name}}!</p>
    </div>
    <v-container class="logger">
      I am the profile view
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cartel {
  position: fixed;
  z-index: 1;
  padding-left: 1rem;
  background-color: #DD7225;
  color: white;
  width: 100%;
  height: 65px;
  border-radius: 0 0 5rem 0;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.59);
}
.logger {
  padding-top: 100px;
}
</style>
