<template>
  <div>
    <div class="tittle">
      <span>What's Inside</span>
      <hr class="mx-10 divider" color="orange"/>
    </div>
    <v-carousel
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
      <v-img
        :src="require(`../assets/mockups/${item.src}.png`)"
        contain
        class="image"
      ></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'mockup-subs'
        },
        {
          src: 'mockup-calendar'
        },
        {
          src: 'mockup-balance'
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
.image {
  height: 100%;
}
</style>
