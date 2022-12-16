<template>
  <div>
    <v-card class="mx-auto my-5" max-width="340" color="orange lighten-5">
      <v-container d-flex flex-no-wrap flex-column>
        <div>
          <div class="d-flex flex-row justify-center justify-space-around">
            <img class="my-auto" :src="require(`../assets/logos/${this.notif.subscriptionid.iconName}.png`)">
            <div>
              <v-card-title style="padding-top:0px;">
                {{ this.notif.subscriptionid.name }}
              </v-card-title>
              <v-card-subtitle style="padding:0px 16px;">
                {{ this.notif.subscriptionid.plan.name }}
              </v-card-subtitle>
              <v-card-subtitle style="padding:0px 16px;">
                Notification date: {{ new Date(this.notif.date).toLocaleDateString('es-ES') }}
              </v-card-subtitle>
            </div>
              <v-btn icon @click="deletingNotif = true">
                    <v-icon >mdi-close-thick</v-icon>
              </v-btn>
            <!-- <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="testFunction2">Edit</v-list-item>
                <v-list-item @click="deletingNotif = true">Delete</v-list-item>
              </v-list>
            </v-menu> -->
          </div>
        </div>
      </v-container>
    </v-card>
    <DelNotifCard v-if="deletingNotif" @close-card="deletingNotif = false" @delete-notif="deleteNotif"/>
  </div>
</template>

<script>
import DelNotifCard from '@/components/DelNotifCard.vue'
import notifAPI from '../services/notification.js'

export default {
  components: {
    DelNotifCard
  },
  data: () => ({
    deletingNotif: false
  }),
  props: {
    notif: Object
  },
  methods: {
    async deleteNotif () {
      await notifAPI.deleteNotification(this.notif._id)
      this.$emit('updt-notifs', this.notif._id)
    },
    testFunction2 () {
      alert('HACE OTRA COSA!!')
    }
  }
}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
