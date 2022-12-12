<template>
  <div>
    <ProfileBar />

    <v-container>
      <v-card-text>
        <v-row>
          <v-col cols="10">
            <div>
              <v-text-field label="Search" append-icon="mdi-magnify" v-model="subInput"></v-text-field>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="text-center">
              <v-btn fab dark small color="primary">
                <v-icon dark>mdi-sort</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>

    <SubCard v-for="(sub, idx) in searchSub" :key="idx" :sub="sub" @delete-sub="deleteSub"/>

    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="300px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark small fab v-bind="attrs" v-on="on">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-container d-flex flex-no-wrap>
            <v-card-actions>
              <v-btn color="primary" text @click="dialog = false">
                <v-icon dark>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title>Subscriptions</v-card-title>
          </v-container>
          <v-text-field class="mx-auto" style="width: 90%;" outlined label="Search" v-model="catInput"></v-text-field>

          <v-divider></v-divider>

          <v-card class="mx-auto" width="300" height="300">
            <v-list>

              <v-list-group v-for="(elem, i) in searchCat" :key="i" :value="false" prepend-icon="mdi-account-circle">
                <template v-slot:activator>
                  <v-list-item-title>{{ elem.name }}</v-list-item-title>
                </template>

                <v-list-item v-for="(child, i) in elem.plans" :key="i" link>
                  <v-list-item-title @click="addSub(child, elem)">{{ child.name }}</v-list-item-title>
                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>

        </v-card>
      </v-dialog>
    </v-row>

  </div>
</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import SubCard from '@/components/SubCard.vue'
import subsAPI from '../services/subscription.js'
import catAPI from '../services/catalog.js'

export default {
  components: {
    ProfileBar,
    SubCard
  },
  data: () => ({
    subInput: '',
    catInput: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ],
    subs: [],
    catalog: [],
    dialogm1: '',
    dialog: false
  }),
  computed: {
    searchSub () {
      return this.subs.filter(sub => sub.name.toLowerCase().includes(this.subInput.toLowerCase()))
    },
    searchCat () {
      return this.catalog.filter(sub => sub.name.toLowerCase().includes(this.catInput.toLowerCase()))
    }
  },
  async created () {
    const subs = await subsAPI.getSubscriptions()
    const catalog = await catAPI.getCatalog()
    this.subs = subs
    this.catalog = catalog
  },
  methods: {
    async addSub (plan, sub) {
      const newSub = {
        userid: '6395e8f1dde096bf11dd1688',
        name: sub.name,
        plan: {
          name: plan.name,
          hiring: plan.hiring,
          quantity: plan.quantity
        },
        unsublink: '',
        instructions: '',
        hiring_day: new Date(),
        payment_method: '',
        notes: ''
      }
      console.log(newSub)
      /* await subsAPI.addSubscriptions(newSub) */
    },
    async deleteSub (subId) {
      await subsAPI.deleteSubscription(subId)
      this.subs = this.subs.filter(sub => sub._id !== subId)
    }
  }
}
</script>

<style scoped>
img {
  width: 50px;
}
</style>
