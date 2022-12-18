<template>
  <div>
  <ProfileBarVue />
    <v-container class="text-center mt-5 mb-0">
      <v-date-picker
        v-model="today"
        :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
        :events="functionEvents"
        @click:date="showSubs"
      ></v-date-picker>
    </v-container>
    <v-container>
      <SubCard v-for="(sub, idx) in subsInDate" :key="idx" :sub="sub"/>
    </v-container>
  </div>
</template>

<script>
import ProfileBarVue from '@/components/ProfileBar.vue'
import SubCard from '@/components/SubCard.vue'
import subsAPI from '../services/subscription.js'

export default {
  components: {
    ProfileBarVue,
    SubCard
  },
  data: () => ({
    subs: [],
    nextPayments: [],
    today: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    subsInDate: []
  }),
  methods: {
    functionEvents (date) {
      if (this.nextPayments.includes(date)) {
        const count = this.nextPayments.filter(elem => elem === date).length
        const icons = '.red'.repeat(count).split('.')
        icons.unshift()
        return icons
      }
      return false
    },
    showSubs (date) {
      this.subsInDate = this.subs.filter(sub => sub.nextPayment.split('T')[0] === date)
    }
  },
  async beforeCreate () {
    this.subs = await subsAPI.getSubscriptions()
    this.nextPayments = this.subs.map(sub => sub.nextPayment.split('T')[0])
  }
}
</script>

<style scoped>

</style>
