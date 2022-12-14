<template>
  <div>
    <div class="faq">
      <h1>FAQ</h1>
      <span>Frequently Asked Questions</span>
    </div>
    <questionComp v-for="info in questions" :key="info" :data=info />
  </div>
</template>

<script>
import questionComp from '../components/QuestionComp.vue'
export default {
  components: {
    questionComp
  },
  data () {
    return {
      questions: [
        {
          tittle: '¿Hay suscripciones personalizadas?'
        },
        {
          tittle: '¿El servicio se encarga de gestionar los cobros?'
        },
        {
          tittle: '¿El servicio vende nuestra información?'
        },
        {
          tittle: '¿El equipo de desarollo tiene pensado sacar una aplicación para móvil?'
        },
        {
          tittle: '¿El servicio seguirá siendo gratuito?'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  text-align: center;
  margin: 50px;
}

</style>
