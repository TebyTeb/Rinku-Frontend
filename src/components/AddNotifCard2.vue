<template>
  <div>

    <v-row justify="center" style="margin: 0px">
      <v-dialog v-model="dialog" scrollable max-width="300px">

        <template v-slot:activator="{ on, attrs }">
          <v-btn rounded color="primary" dark v-bind="attrs" v-on="on" @click="store.switchDialog">
            ADD NOTIFICATION
          </v-btn>
        </template>

        <v-card>
          <v-row>
            <v-dialog v-model="dialog" persistent max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="text-h5 mx-auto pl-8">Add Notification</span>
                  <v-btn color="primary" text @click="store.switchDialog" icon>
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" class="mb-0 pb-0">
                        <v-select :items="plans" label="Choose plan*" required v-model="subPlan"></v-select>
                      </v-col>

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
                          <v-text class="ml-3 mt-3 pt-3" style="font-size: 16px;">Remind me on*:</v-text>
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
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import subsAPI from '../services/subscription.js'
import notifAPI from '../services/notification.js'
import { useCatalogStore, useAuthStore } from '@/stores/store'

export default {
  data: () => ({
    radioGroup: 'period',
    store: useCatalogStore(),
    store2: useAuthStore(),
    subs: [],
    plans: [],
    subPlan: '',
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    quantity: '',
    period: ''
  }),
  computed: {
    dialog () {
      return this.store.dialogState
    }
  },
  async created () {
    this.subs = await subsAPI.getSubscriptions(sub => sub.userid.email === this.store2.email)
    this.plans = this.subs.map(sub => sub.name + ' - ' + sub.plan.name)
  },
  methods: {
    async addNotif () {
      const nextPayment = new Date(this.subs.filter(sub => this.subPlan.includes(sub.name))[0].nextPayment)

      if (this.radioGroup === 'period' && this.period === 'days') {
        this.date = nextPayment.setDate(nextPayment.getDate() - this.quantity)
      } else if (this.radioGroup === 'period' && this.period === 'weeks') {
        this.date = nextPayment.setDate(nextPayment.getDate() - this.quantity * 7)
      } else if (this.radioGroup === 'period' && this.period === 'months') {
        this.date = nextPayment.setMonth(nextPayment.getMonth() - this.quantity)
      }

      const newNotif = {
        date: this.date,
        subscriptionid: this.subs.filter(sub => this.subPlan.includes(sub.name))[0]._id
      }
      await notifAPI.addNotification(newNotif)
      this.$emit('add-notif', newNotif)
      this.quantity = ''
      this.period = ''
      this.date = ''
      this.store.closeDialog()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
