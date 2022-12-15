<template>
  <div>
    <div class="faq">
      <h1>FAQ</h1>
      <span>Frequently Asked Questions</span>
    </div>
    <questionComp v-for="info, idx in questions" :key="idx" :data=info />
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
          tittle: '¿Hay suscripciones personalizadas?',
          text: 'Ahora mismo no esta implementado aun pero se llevara acabo no en mucho tiempo'
        },
        {
          tittle: '¿El servicio se encarga de gestionar los cobros?',
          text: 'El servicio no gestiona ningun cobro lo que hace es ayudarte a que controles los gastos que realizas con los servicios de stream'
        },
        {
          tittle: '¿El servicio vende nuestra información?',
          text: 'No vendemos ninguna informacion personal de nuestros usuarios y por obligacion de la ley de proteccion de datos estamos en el deber de asegurar la seguridad de nuestros usuarios'
        },
        {
          tittle: '¿El equipo de desarollo tiene pensado sacar una aplicación para móvil?',
          text: 'Esta en proceso de desarrollo para que este accesible para todas las plataformas'
        },
        {
          tittle: '¿El servicio seguirá siendo gratuito?',
          text: 'Si el servicio sera totalmente gratuito pero habran paquetes de mejoras para aquellos que quieran usar mas afondo el servicio'
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
