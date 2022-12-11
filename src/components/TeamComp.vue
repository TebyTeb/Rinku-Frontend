<template>
  <div class="team">
    <div class="tittle">
      <span >BAIT Monkey Team</span>
    </div>
    <v-card v-for="person in team" :key="person" class="mx-auto" max-width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title> {{person.name}} </v-card-title>

      <v-card-subtitle> {{person.puesto}} </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'Barbara Segura Suarez',
          puesto: 'Directora de Diseño'
        },
        {
          name: 'Alejandro Cruz Santiago',
          puesto: 'El del Cafe'
        },
        {
          name: 'Iratze Eizaguirre Loro',
          puesto: 'Jefa de Recursos Humanos'
        },
        {
          name: 'Esteban Ojeda Hernandez',
          puesto: 'Jefe de Seguridad'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.team{
  margin-top: 70px;
}
.tittle {
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
