<template>
  <div>
    <ProfileBar />
    <v-container style="padding: 0px 12px; height: 80px">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div>
              <v-text-field label="Search" append-icon="mdi-magnify" v-model="searchInput"></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
    <CatalogCard @show-add-sub="showAddSub"/>
    <SubCard v-for="(sub, idx) in search" :key="idx" :sub="sub" @delete-sub="deleteSub"/>
    <AddSubCard v-if="addingSub" @close-add-sub="addingSub = false" @updt-subs="updtSubs" :sub="subToAdd" :plan="planToAdd"/>
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
    addingSub: false,
    planToAdd: '',
    subToAdd: ''
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
      this.planToAdd = plan
      this.subToAdd = sub
    },
    updtSubs (newSub) {
      this.subs.push(newSub)
    },
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
