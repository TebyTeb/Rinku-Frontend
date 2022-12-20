<template>
  <div>
    <ProfileBar />
    <CatalogCard class="pt-8" @show-add-sub="showAddSub"/>
    <LoadingComp v-if="loadingshow"/>
    <img class="mt-10" style="width: 100%" v-if="subs.length === 0" src="../assets/emptyViewImages/noSubs.jpg">
    <p class="ml-0 mt-3 text-center" style="font-size: 18px; width: 100vw;" v-if="subs.length === 0">You have no subs registered yet!</p>

    <v-container v-if="subs.length > 3" style="padding: 0px 10px; height: 80px">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Search your subscriptions" append-icon="mdi-magnify" v-model="searchInput"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
    <SubCard v-for="(sub, idx) in search" :key="idx" :sub="sub" @delete-sub="deleteSub" :met="upData"/>
    <AddSubCard v-if="addingSub" @close-add-sub="addingSub = false" @updt-subs="updtSubs" :sub="subToAdd" :plan="planToAdd"/>
  </div>
</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import SubCard from '@/components/SubCard.vue'
import CatalogCard from '@/components/CatalogCard.vue'
import AddSubCard from '@/components/AddSubCard.vue'
import subsAPI from '../services/subscription.js'
import LoadingComp from '../components/LoadingComp.vue'

export default {
  components: {
    ProfileBar,
    SubCard,
    CatalogCard,
    AddSubCard,
    LoadingComp
  },
  data: () => ({
    searchInput: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ],
    subs: [],
    loadingshow: false,
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
    this.loadingshow = true
    const subs = await subsAPI.getSubscriptions()
    this.loadingshow = false
    this.subs = subs
  },
  methods: {
    showAddSub (plan, sub) {
      this.addingSub = true
      this.planToAdd = plan
      this.subToAdd = sub
    },
    async updtSubs () {
      this.loadingshow = true
      this.subs = await subsAPI.getSubscriptions()
      this.loadingshow = false
    },
    async deleteSub (subId) {
      this.loadingshow = true
      await subsAPI.deleteSubscription(subId)
      this.loadingshow = false
      this.subs = this.subs.filter(sub => sub._id !== subId)
    },
    async upData () {
      this.loadingshow = true
      const subs = await subsAPI.getSubscriptions()
      this.loadingshow = false
      this.subs = subs
    }
  },
  mounted () {
    this.$root.$on('update-subs', () => {
      this.upData()
    })
    this.$root.$on('create-sub', () => {
      this.upData()
    })
  }
}
</script>

<style scoped>
img {
  width: 50px;
}
</style>
