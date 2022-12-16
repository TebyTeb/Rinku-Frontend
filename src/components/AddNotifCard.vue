<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>

          <v-card-title>
            <span class="text-h5 mx-auto pl-8">Add Notification</span>
            <v-btn color="primary" text @click="closeAddNotif" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>

                <v-col class="mt-0 pt-0">
                  <v-radio-group v-model="radioGroup" row>
                    <v-radio label="Periodical" value="period"></v-radio>
                    <v-spacer></v-spacer>
                    <v-radio label="Unique" value="unique"></v-radio>
                  </v-radio-group>

                  <v-row v-if="radioGroup === 'period'">
                    <span class="ml-3 mt-3 pt-3" style="font-size: 16px;">Remind me before*:</span>
                    <v-col class="mt-0 pt-0" cols="6" sm="6" md="4">
                      <v-text-field label="Number" v-model="quantity" type="text" required></v-text-field>
                    </v-col>
                    <v-col class="mt-0 pt-0" cols="6" sm="6" md="4">
                      <v-select :items="['days', 'weeks', 'months']" label="Periodicity*" required
                        v-model="period"></v-select>
                    </v-col>
                  </v-row>

                  <v-row v-if="radioGroup === 'unique'">
                    <span class="ml-3 mt-3 pt-3" style="font-size: 16px;">Remind me on*:</span>
                    <v-col class="mt-0 pt-0" cols="12" sm="6" md="4">
                      <v-text-field type="date" v-model="date"></v-text-field>
                    </v-col>
                  </v-row>

                </v-col>
              </v-row>

            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" rounded dark small class="mx-auto mb-5 px-4" @click="addNotif">
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
    radioGroup: 'period',
    dialog: true,
    date: '',
    quantity: '',
    period: ''
  }),
  props: {
    sub: Object
  },
  methods: {
    async addNotif() {

      const nextPayment = new Date(this.sub.nextPayment)

      if (this.radioGroup === 'period' && this.period === 'days') {
        this.date = nextPayment.setDate(nextPayment.getDate() - this.quantity)
      }
      else if (this.radioGroup === 'period' && this.period === 'weeks') {
        this.date = nextPayment.setDate(nextPayment.getDate() - this.quantity * 7)
      }
      else if (this.radioGroup === 'period' && this.period === 'months') {
        this.date = nextPayment.setMonth(nextPayment.getMonth() - this.quantity)
      }

      const newNotif = {
        date: this.date,
        subscriptionid: this.sub._id
      }
      await notifAPI.addNotification(newNotif)
      this.$emit('close-add-notif')
    },
    closeAddNotif() {
      this.$emit('close-add-notif')
    }
  }
}
</script>

<style scoped>

</style>
