<template>
  <div>
    <ProfileBar />
    <AddNotifCard2 class="pt-8" @add-notif="updtNotifs()"/>
    <LoadingComp v-if="loadingshow"/>
    <img class="mt-10" style="width: 100%" v-if="notifs.length === 0" src="../assets/emptyViewImages/noSubs.jpg">
    <p class="mt-3 text-center" style="font-size: 18px; width: 100vw;" v-if="notifs.length === 0">Program your first notification!</p>
    <v-container v-if="notifs.length > 3" style="padding: 0px 12px; height: 80px">
      <v-card-text style="padding: 10px;">
          <v-text-field label="Search" append-icon="mdi-magnify" v-model="searchInput"></v-text-field>
      </v-card-text>
    </v-container>
    <NotifCard v-for="(notif, idx) in search" :key="idx" :notif="notif" @updt-notifs="updtNotifs"/>
  </div>
</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import NotifCard from '@/components/NotifCard.vue'
import AddNotifCard2 from '@/components/AddNotifCard2.vue'
import notifAPI from '../services/notification.js'
import LoadingComp from '../components/LoadingComp.vue'

export default {
  components: {
    ProfileBar,
    NotifCard,
    AddNotifCard2,
    LoadingComp
  },
  data: () => ({
    searchInput: '',
    loadingshow: false,
    notifs: []
  }),
  async created () {
    this.loadingshow = true
    this.notifs = await notifAPI.getNotifications()
    this.loadingshow = false
  },
  computed: {
    search () {
      return this.notifs.filter(notif => notif.subscriptionid.name.toLowerCase().includes(this.searchInput.toLowerCase()))
    }
  },
  methods: {
    async updtNotifs () {
      this.loadingshow = true
      this.notifs = await notifAPI.getNotifications()
      this.loadingshow = false
    }
  }
}
</script>

<style scoped>
</style>
