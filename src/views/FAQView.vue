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
          tittle: '¿hay suscripciones personalisadas?'
        },
        {
          tittle: '¿gestinan los cobros?'
        },
        {
          tittle: '¿venden nuestra informacion?'
        },
        {
          tittle: '¿Teneis pensado sacar una aplicacion para movil?'
        },
        {
          tittle: '¿El servicio seguira siendo gratuito?'
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
