<template>
  <div>
    <div class="def">
      <h1>About Us</h1>
      <p>
        Rinku es un servicio para gestionar los gastos que un usuario tiene con las distintas subscripciones
        que haya adquirido o vaya adquiriendo.
      </p>
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
}
</style>
