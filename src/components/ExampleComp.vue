<template>
  <div>
    <div class="tittle">
      <span>Nuestra App</span>
    </div>
    <v-carousel interval=3000 cycle height="900">
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
          src: 'img3'
        },
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
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
