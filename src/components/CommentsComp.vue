<template>
  <div class="cont">
    <div class="titulo">
      <span>Reseñas</span>
      <hr class="mx-12 divider" color="orange"/>
    </div>
    <v-carousel v-model="model" height="300" hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="mensaje, idx in mensajes" :key="idx" >
        <v-card
          class="mx-5 format"
          color="orange lighten-4"
          max-width="400"
          card-border-radius="100px"
        >
          <v-card-title>
            <span class="text-h6 card-title">Rinku</span>
            <v-spacer></v-spacer>
            <v-icon large left> mdi-format-quote-close </v-icon>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            {{mensaje.menssage}}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-2">
                <v-img
                  class="elevation-6"
                  alt=""
                  :src=mensaje.src
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{mensaje.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    mensajes: [
      {
        menssage: 'I love the service, beautiful, easy to use and very useful. It\'s great!',
        src: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Sunglasses&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=DarkBrown',
        name: 'Jhon Smitch',
        like: 389,
        retwit: 210
      },
      {
        menssage: 'Thanks to this service I\'ve been able to save a lot of money that I used to lose',
        src: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned',
        name: 'Marta Sanchez',
        like: 512,
        retwit: 110
      },
      {
        menssage: 'I\'m a fan of how well organized the service is and how easily it is to understand',
        src: 'https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Blue03&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light',
        name: 'Hector Mandela',
        like: 789,
        retwit: 342
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.cont {
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titulo {
  font-family: 'Mukta', sans-serif;
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.divider {
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.75);
}
.format{
  border-radius: 10px;
}
.card-title {
  font-weight: bold;
  color: #756752;
}
</style>
