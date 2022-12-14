<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <v-btn color="primary" text @click="closeAddNotif" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <span class="text-h5 mx-auto">Change Subscription</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                  <v-col class="d-flex" cols="12" md="4" sm="6">
                    <v-select
                      :items="nameplans"
                      :label="sub.plan.name"
                      v-model="plan"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="text"
                    label="payment method"
                    v-model="pay"
                    :placeholder="sub.payment_method"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Personalized message"
                    v-model="mens"
                    :placeholder="sub.notes"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              dark
              small
              class="mx-auto mb-5"
              @click="upPlan"
            >
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import updateSub from '../services/subscription.js'
export default {
  data () {
    return {
      dialog: true,
      nameplans: [],
      plan: '',
      pay: '',
      mens: ''
    }
  },
  props: {
    sub: Object,
    plans: Array
  },
  methods: {
    closeAddNotif () {
      this.$emit('close-add-notif')
    },
    async upPlan () {
      let newplan
      this.plans.forEach(e => {
        if (e.name === this.plan) {
          newplan = e
        }
      })
      const upsub = {
        plan: newplan,
        payment_method: this.pay,
        notes: this.mens
      }
      await updateSub.updateSubscription(this.sub._id, upsub)
      this.$emit('close-add-notif')
    }
  },
  created () {
    this.plans.forEach(e => {
      this.nameplans.push(e.name)
    })
  }
}
</script>

<style lang="scss" scoped></style>
