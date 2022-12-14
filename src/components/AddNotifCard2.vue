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
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="500px">
              <v-card>

                <v-card-title>
                  <v-btn color="primary" text @click="store.switchDialog" icon>
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <span class="text-h5 mx-auto">Add Notification</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-select :items="plans" label="Choose plan*" required v-model="subPlan"></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Hiring date*" v-model="date" type="date"
                          hint="This data will be taken to calculate payment days and  total paid amounts"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Personal message" v-model="message"></v-text-field>
                      </v-col>
                      <!-- <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint
                    required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests" multiple></v-autocomplete>
                </v-col> -->
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
    store: useCatalogStore(),
    store2: useAuthStore(),
    subs: [],
    plans: [],
    subPlan: '',
    date: '',
    message: '',
    test: ''
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
      const newNotif = {
        date: this.date,
        message: this.message,
        subscriptionid: this.subs.filter(sub => this.subPlan.includes(sub.name))[0]._id
      }
      await notifAPI.addNotification(newNotif)
      this.$emit('add-notif', newNotif)
      this.store.closeDialog()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
