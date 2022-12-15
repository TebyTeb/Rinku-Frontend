<template>
  <div>
    <v-card class="mx-auto cardMar" elevation="6">
      <v-card-actions @click="show = !show" class="fer">
        <span class="exp">{{ data.tittle }}</span>
        <v-spacer></v-spacer>
        <v-btn icon >
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show" >
          <v-divider></v-divider>
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.cardMar{
  margin-bottom: 15px;
}
.exp {
 color: #dd7225;
}
.fer {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
