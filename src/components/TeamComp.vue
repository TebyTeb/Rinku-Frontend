<template>
  <div class="team">
    <div class="tittle">
      <v-img src="../assets/Monkey.svg"></v-img>
      <span class="leter">BAIT</span>
      <span class="leter">Monkey Team</span>
    </div>
    <hr class="mx-12 divider" color="orange"/>
    <v-card v-for="per, idx in team" :key="idx" class="mx-auto usercard" max-width="344">
      <v-img
        :src="require(`../assets/${per.imgsrc}.jpg`)"
        height="270"
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
          name: 'Bárbara Segura Suárez',
          puesto: 'Directora Creativa',
          imgsrc: 'barbara'
        },
        {
          name: 'Alejandro Cruz Santiago',
          puesto: 'El del Backend',
          imgsrc: 'alex'
        },
        {
          name: 'Iratze Eizaguirre Loro',
          puesto: 'Personal de apoyo',
          imgsrc: 'iratze'
        },
        {
          name: 'Esteban Ojeda Hernández',
          puesto: 'El del Frontend',
          imgsrc: 'teby'
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.usercard {
  margin: 20px 0;
}
.leter {
  font-family: 'Mukta', sans-serif;
}
.divider {
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.75);
}
</style>
