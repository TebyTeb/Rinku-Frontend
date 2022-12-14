<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <v-btn color="primary" text @click="closeAddNotif" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <span class="text-h5 mx-auto">Add Notification</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field type="date" label="Date*" v-model="date"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Personalized message" v-model="message"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" dark small class="mx-auto mb-5" @click="addNotif">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import notifAPI from '../services/notification.js'

export default {
  data: () => ({
    dialog: true,
    date: '',
    message: ''
  }),
  props: {
    sub: Object
  },
  methods: {
    async addNotif () {
      const newNotif = {
        date: this.date,
        message: this.message,
        subscriptionid: this.sub._id
      }
      await notifAPI.addNotification(newNotif)
      this.$emit('close-add-notif')
    },
    closeAddNotif () {
      this.$emit('close-add-notif')
    }
  }
}
</script>

<style scoped>

</style>
