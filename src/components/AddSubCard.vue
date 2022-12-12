<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <v-btn color="primary" text @click="closeAddSub" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <span class="text-h5 mx-auto">Add Subscription</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Hiring date*" v-model="hiring"
                    hint="This data will be taken to calculate payment days and  total paid amounts"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Payment method" v-model="paymentMethod"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Notes" v-model="notes"></v-text-field>
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
            <v-btn color="primary" dark small class="mx-auto mb-5" @click="addSub">
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

export default {
  data: () => ({
    dialog: true,
    hiring: '',
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
      console.log(newSub)
      await subsAPI.addSubscription(newSub)
      this.$emit('updt-subs', newSub)
    },
    closeAddSub () {
      this.$emit('close-add-sub')
    }
  }
}
</script>

<style scoped>

</style>
