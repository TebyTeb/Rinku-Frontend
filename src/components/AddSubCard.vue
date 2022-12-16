<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card height="500px">
          <v-card-title>
            <span class="text-h5 mx-auto">Add Subscription</span>
            <v-btn color="primary" text @click="closeAddSub" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Hiring date*" v-model="hiring" type="date"
                    hint="This data will be taken to calculate payment days and  total paid amounts"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select :items="['Credit Card', 'Bedit Card', 'PayPall', 'PaySave Card', 'Prepaid Card', 'Others']" label="Payment method" v-model="paymentMethod"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Notes" v-model="notes"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" dark small rounded class="mx-auto mb-5 px-4" @click="addSub">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import subsAPI from '../services/subscription.js'
import { useCatalogStore } from '@/stores/store'

export default {
  data: () => ({
    store: useCatalogStore(),
    dialog: true,
    hiring: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    paymentMethod: '',
    notes: ''
  }),
  props: {
    sub: Object,
    plan: Object
  },
  methods: {
    async addSub () {
      const newSub = {
        name: this.sub.name,
        plan: {
          name: this.plan.name,
          hiring: this.plan.hiring,
          quantity: this.plan.quantity
        },
        unsublink: this.sub.unsublink,
        instructions: this.sub.instructions,
        hiring_day: new Date(this.hiring),
        payment_method: this.paymentMethod,
        notes: this.notes,
        iconName: this.sub.iconName
      }
      await subsAPI.addSubscription(newSub)
      this.$root.$emit('create-sub')
      this.$emit('close-add-sub')
      this.store.closeDialog()
    },
    closeAddSub () {
      this.$emit('close-add-sub')
    }
  }
}
</script>

<style scoped>

</style>
