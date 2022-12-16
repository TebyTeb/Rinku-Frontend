<template>
  <div>
    <div class="def">
      <h1>About Us</h1>
      <hr class="mx-7 divider" color="orange"/>
    </div>
    <personComp />
  </div>
</template>

<script>
import personComp from '../components/PersonComp.vue'
export default {
  components: {
    personComp
  }
}
</script>

<style lang="scss" scoped>
.def{
  text-align: center;
  margin: 20px 20px 20px 20px;
  font-family: 'Mukta', sans-serif;
}
.divider {
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.75);
}
</style>
