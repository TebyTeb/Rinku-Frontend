<template>
  <div>
    <ProfileBar />
    {{ this.notifications }}
  </div>
</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import notiAPI from '../services/notification.js'

export default {
  components: {
    ProfileBar
  },
  data: () => ({
    notifications: []
  }),
  async created () {
    const notifications = await notiAPI.getNotifications()
    this.notifications = notifications
  }
}
</script>

<style scoped>
img {
  width: 50px;
}
</style>
