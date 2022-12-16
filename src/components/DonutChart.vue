<template>
  <div>
    <v-container class="v-flex text-center mt-8 py-0">
      <span class="text-h5">Monthly</span>
    </v-container>
    <div>
      <GChart :type="type" :data="data" :options="options" />
    </div>
    <v-container class="mt-5">
      <v-card class="mx-auto my-3" max-width="340" color="orange lighten-5">
        <v-card-title class="py-2">
          Total paying: {{ totalPaying }} €
        </v-card-title>
      </v-card>
      <v-card class="mx-auto my-3" max-width="340" color="orange lighten-5">
        <v-card-title class="py-2">
          Budget: {{ budget }} €
        </v-card-title>
      </v-card>
      <v-card v-if="budget !== 0" class="mx-auto my-3" max-width="340" color="orange lighten-5">
        <v-card-title class="py-2">
          Balance: {{ budget - totalPaying }} €
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts/legacy'
import subsAPI from '../services/subscription.js'

export default {
  components: {
    GChart
  },
  data: () => ({
    subs: [],
    totalPaying: null,
    budget: 0,
    type: 'PieChart',
    data: [
      ['Subscriptions', 'Costs']
    ],
    options: {
      legend: {
        position: 'bottom'
      },
      pieHole: 0.5,
      width: '100%',
      height: 250,
      chartArea: {
        width: '85%',
        height: '80%'
      }
    }
  }),
  async created () {
    const mySubs = await subsAPI.getSubscriptions()
    this.subs = mySubs
    const arr = []
    mySubs.forEach(sub => {
      if (!arr.find(el => el[0] === sub.name)) {
        const eachSub = mySubs.filter(elem => elem.name === sub.name)
        const budget = eachSub.reduce((acc, curr) => {
          if (curr.plan.hiring === 'year') {
            return acc + Math.round(curr.plan.quantity / 12 * 100) / 100
          } else {
            return acc + curr.plan.quantity
          }
        }, 0)
        this.data.push([sub.name, budget])
        arr.push([sub.name, budget])
        this.totalPaying += budget
      }
    })
    if (this.subs[0].userid.budget) {
      this.budget = this.subs[0].userid.budget
    }
  }
}
</script>

<style scoped>

</style>
