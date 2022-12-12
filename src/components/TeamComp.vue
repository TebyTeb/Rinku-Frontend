<template>
  <div class="team">
    <div class="tittle">
      <v-img src="../assets/Monkey.svg"></v-img>
      <span class="leter">BAIT Monkey Team</span>
    </div>
    <v-card v-for="per in team" :key="per" class="mx-auto usercard" max-width="344">
      <v-img
        :src="per.imgsrc"
      ></v-img>

      <v-card-title> {{per.name}} </v-card-title>

      <v-card-subtitle> {{per.puesto}} </v-card-subtitle>
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
          puesto: 'Directora de Diseño',
          imgsrc: '../assets/Imgalex.jpg'
        },
        {
          name: 'Alejandro Cruz Santiago',
          puesto: 'El del Cafe',
          imgsrc: '../assets/Imgalex.jpg'
        },
        {
          name: 'Iratze Eizaguirre Loro',
          puesto: 'Jefa de Recursos Humanos',
          imgsrc: '../assets/Imgalex.jpg'
        },
        {
          name: 'Esteban Ojeda Hernandez',
          puesto: 'Jefe de Seguridad',
          imgsrc: '../assets/Imgalex.jpg'
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
  font-size: 30px;
  text-align: center;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.usercard {
  margin-bottom: 20px;
}
.leter {
  margin-left: 15px;
}
</style>
