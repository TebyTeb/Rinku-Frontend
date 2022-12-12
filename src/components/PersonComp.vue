<template>
  <div class="format">
    <div v-for="name in names" :key="name" class="person">
      <v-card>
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-card-title class="white--text mt-8">
            <v-avatar size="120">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              />
            </v-avatar>
            <p class="name">{{name}}</p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.tittle }}</strong>
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      names: ['Barbara Segura', 'Alejandro Cruz', 'Iratze Loro', 'Esteban Ojeda'],
      messages: [
        {
          tittle: 'Description',
          message:
            'Tengo 24 años y soy desarrollador de aplicaciones multiplataforma llevo 4 años' +
            'trabajando en el sector de la programacion actualmente me dedico a el mantenimiento',
          color: 'deep-purple lighten-1'
        },
        {
          tittle: 'Hobbies',
          message: 'go to isengard',
          color: 'deep-purple lighten-1'
        },
        {
          tittle: 'Social',
          message: 'Twitter, Facebook, Instagram, TikTok, ...',
          color: 'deep-purple lighten-1'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.name {
  font-size: 30px;
  margin-left: 25px;
}
.format{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.person{
  margin: 10px;
}
</style>
