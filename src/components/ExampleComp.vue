<template>
  <div>
    <div class="tittle">
      <span>Nuestra App</span>
      <hr class="mx-12 divider" color="orange"/>
    </div>
    <v-carousel height="900">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require(`../assets/${item.src}.png`)"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'img4'
        },
        {
          src: 'image'
        },
        {
          src: 'image2'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tittle {
  font-family: 'Mukta', sans-serif;
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.divider {
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.75);
}
</style>
