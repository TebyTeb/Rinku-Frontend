<template>
  <div>
    <v-card class="mx-auto my-5" max-width="344" prepend-icon="mdi-bell" title="twitter" color="orange lighten-5">
      <v-container d-flex flex-no-wrap justify-space-between @click="show = !show">
        <div class="inner" >
      <img
      class="img my-auto"
      :src="require(`../assets/logos/${this.sub.iconName}.png`)">
          <div>
            <v-card-title>
              {{ this.sub.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ this.sub.plan.name }}
            </v-card-subtitle>
          </div>
        </div>
    <v-card-actions>
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-card-actions>
      </v-container>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text class="pt-0">
            <p><strong>Billing: </strong>{{ sub.plan.quantity }} €/{{ sub.plan.hiring }}</p>
            <v-divider v-if="sub.payment_method !== ''"></v-divider>
            <p><strong v-if="sub.payment_method !== ''">Payment method: </strong>{{ sub.payment_method }}</p>
            <v-divider></v-divider>
            <p><strong>First payment: </strong>{{ new Date(sub.hiring_day).toLocaleDateString('es-ES') }}</p>
            <v-divider></v-divider>
            <p><strong>Next Payment: </strong>{{ new Date(sub.nextPayment).toLocaleDateString('es-ES') }}</p>
            <v-divider></v-divider>
            <p><strong>Paid in total: </strong>{{ parseFloat(sub.totalPaid).toFixed(2) }} €</p>
            <v-divider v-if="sub.notes !== ''"></v-divider>
            <p v-if="sub.notes !== ''"><strong>Notes: </strong>{{ sub.notes }}</p>
          </v-card-text>

          <div class="d-flex flex-row">
            <div class="text-center d-flex flex-column ml-3" style="width: 60px;">
              <v-btn icon class="mx-auto" @click="addingNot = true">
                <v-icon>mdi-bell</v-icon>
              </v-btn>
              <span style="font-size: 12px; margin-bottom: 12px;">NOTIFY</span>
            </div>

            <v-spacer></v-spacer>

            <div class="text-center d-flex flex-column" style="width: 60px;">
              <v-btn icon class="mx-auto" @click="editsub = true">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <span style="font-size: 12px; margin-bottom: 12px;">EDIT</span>
            </div>
            <div class="text-center d-flex flex-column mr-3" style="width: 60px;">
              <v-btn icon class="mx-auto" @click="deletingSub = true">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <span style="font-size: 12px; margin-bottom: 12px;">DELETE</span>
            </div>
          </div>
        </div>
      </v-expand-transition>
    </v-card>
    <AddNotifCard v-if="addingNot" @close-add-notif="addingNot = false" :sub="sub" />
    <EditSubCard v-if="editsub" @close-add-notif="editsub = false" :sub="sub" :plans="plansub" />
    <DelSubCard v-if="deletingSub" @close-card="deletingSub = false" @delete-sub="deleteSub" />
  </div>
</template>

<script>
import AddNotifCard from '@/components/AddNotifCard.vue'
import EditSubCard from '../components/EditSubCard.vue'
import catLog from '../services/catalog.js'
import DelSubCard from '@/components/DelSubCard.vue'

export default {
  components: {
    AddNotifCard,
    EditSubCard,
    DelSubCard
  },
  props: {
    sub: Object
  },
  data: () => ({
    show: false,
    addingNot: false,
    editsub: false,
    plansub: [],
    deletingSub: false
  }),
  methods: {
    async deleteSub () {
      this.deletingSub = false
      this.$emit('delete-sub', this.sub._id)
    }
  },
  async created () {
    const catalog = await catLog.getCatalog()
    catalog.forEach(e => {
      if (e.name === this.sub.name) {
        this.plansub = e.plans
      }
    })
  }
}
</script>

<style scoped>
  .img {
    max-width: 100%;
    height: 65px;
  }
  .inner {
    display: flex;
  }
  .card {
    display: flex;
    flex-wrap: nowrap;
  }
</style>
