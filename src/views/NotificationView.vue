<template>
  <div>
    <ProfileBar />
    <v-container style="padding: 0px 12px; height: 80px">
      <v-card-text style="padding: 16px;">
          <v-text-field label="Search" append-icon="mdi-magnify" v-model="searchInput"></v-text-field>
      </v-card-text>
    </v-container>
    <NotifCard v-for="(notif, idx) in search" :key="idx" :notif="notif" @updt-notifs="updtNotifs"/>
  </div>
</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import NotifCard from '@/components/NotifCard.vue'
import notificAPI from '../services/notification.js'

export default {
  components: {
    ProfileBar,
    NotifCard
  },
  data: () => ({
    searchInput: '',
    notifs: []
  }),
  async created () {
    this.notifs = await notificAPI.getNotifications()
  },
  computed: {
    search () {
      return this.notifs.filter(notif => notif.subscriptionid.name.toLowerCase().includes(this.searchInput.toLowerCase()))
    }
  },
  methods: {
    updtNotifs (notifId) {
      console.log(notifId)
      const updtdNotifs = this.notifs.filter(notif => notif._id !== notifId)
      this.notifs = updtdNotifs
    }
  }
}
</script>

<style scoped>
</style>
