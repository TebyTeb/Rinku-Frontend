<template>
  <div>
    <span class="tittle">Comentarios de nuestros usuarios</span>
    <v-carousel v-model="model" height="fit-content" hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(mensaje) in mensajes" :key="mensaje" >
        <v-card class="mx-auto format" color="#26c6da" dark max-width="400" card-border-radius="100px">
          <v-card-title>
            <v-icon large left> mdi-twitter </v-icon>
            <span class="text-h6 font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            {{mensaje}}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1"> mdi-heart </v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
                <span class="subheading">45</span>
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
      'me encanta el servicio es lo mas',
      'soy fan de lo bien organizado que tienen el servicio y lo facil de entender',
      'gracias a este servicio he podio ahorrar bastante dinero que antes perdia'
    ]
  })
}
</script>

<style lang="scss" scoped>
.tittle {
  font-size: 40px;
}
.format{
  border-radius: 30px;
}
</style>
