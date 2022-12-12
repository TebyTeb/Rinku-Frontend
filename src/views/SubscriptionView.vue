<template>
  <div>
    <ProfileBar />
    <v-container>
      <v-card-text>
        <v-row>
          <v-col cols="10">
            <div>
              <v-text-field label="Search" append-icon="mdi-magnify" v-model="searchInput"></v-text-field>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="text-center">
              <v-btn fab dark small color="primary">
                <v-icon dark>mdi-sort</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
    <SubCard v-for="(sub, idx) in search" :key="idx" :sub="sub" @delete-sub="deleteSub"/>
    <CatalogCard @show-add-sub="showAddSub"/>
    <AddSubCard v-if="addingSub" @close-add-sub="addingSub = false"/>
  </div>
</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import SubCard from '@/components/SubCard.vue'
import CatalogCard from '@/components/CatalogCard.vue'
import AddSubCard from '@/components/AddSubCard.vue'
import subsAPI from '../services/subscription.js'

export default {
  components: {
    ProfileBar,
    SubCard,
    CatalogCard,
    AddSubCard
  },
  data: () => ({
    searchInput: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ],
    subs: [],
    addingSub: false
  }),
  computed: {
    search () {
      return this.subs.filter(sub => sub.name.toLowerCase().includes(this.searchInput.toLowerCase()))
    }
  },
  async created () {
    const subs = await subsAPI.getSubscriptions()
    this.subs = subs
  },
  methods: {
    showAddSub (plan, sub) {
      this.addingSub = true
      console.log(plan.name)
    },
    /* async addSub (plan, sub) {
      const newSub = {
        userid: '6395e8f1dde096bf11dd1688',
        name: sub.name,
        plan: {
          name: plan.name,
          hiring: plan.hiring,
          quantity: plan.quantity
        },
        unsublink: '',
        instructions: '',
        hiring_day: new Date(),
        payment_method: '',
        notes: ''
      }
      console.log(newSub)
      await subsAPI.addSubscriptions(newSub)
    }, */
    async deleteSub (subId) {
      await subsAPI.deleteSubscription(subId)
      this.subs = this.subs.filter(sub => sub._id !== subId)
    }
  }
}
</script>

<style scoped>
img {
  width: 50px;
}
</style>
