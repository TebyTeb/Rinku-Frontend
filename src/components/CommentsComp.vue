<template>
  <div class="cont">
    <div class="tittle">
      <span>Reseñas</span>
    </div>
    <v-carousel v-model="model" height="300" hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(mensaje) in mensajes" :key="mensaje" >
        <v-card class="mx-auto format" color="#26c6da" dark max-width="400" card-border-radius="100px">
          <v-card-title>
            <v-icon large left> mdi-twitter </v-icon>
            <span class="text-h6 font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            {{mensaje.menssage}}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  :src=mensaje.src
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{mensaje.name}}</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1"> mdi-heart </v-icon>
                <span class="subheading mr-2">{{mensaje.like}}</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
                <span class="subheading">{{mensaje.retwit}}</span>
              </v-row>
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
        menssage: 'me encanta el servicio es lo mas',
        src: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Sunglasses&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=DarkBrown',
        name: 'Jhon Smitch',
        like: 389,
        retwit: 210
      },
      {
        menssage: 'gracias a este servicio he podio ahorrar bastante dinero que antes perdia',
        src: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned',
        name: 'Marta Sanchez',
        like: 512,
        retwit: 110
      },
      {
        menssage: 'soy fan de lo bien organizado que tienen el servicio y lo facil de entender',
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
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tittle {
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.format{
  border-radius: 30px;
}
</style>
