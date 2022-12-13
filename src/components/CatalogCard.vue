<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="300px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark small fab v-bind="attrs" v-on="on" @click="store.switchDialog">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-container d-flex flex-no-wrap>
            <v-card-actions>
              <v-btn color="primary" text @click="store.switchDialog">
                <v-icon dark>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title>Subscriptions</v-card-title>
          </v-container>
          <v-text-field class="mx-auto" style="width: 90%;" outlined label="Search" v-model="searchInput"></v-text-field>

          <v-divider></v-divider>

          <v-card class="mx-auto" width="300" height="300">
            <v-list>
              <v-list-group v-for="(sub, i) in search" :key="i" :value="false" prepend-icon="mdi-account-circle">
                <template v-slot:activator>
                  <v-list-item-title>{{ sub.name }}</v-list-item-title>
                </template>
                <v-list-item v-for="(plan, i) in sub.plans" :key="i" link>
                  <v-list-item-title @click="showAddSub(plan, sub)">{{ plan.name }}</v-list-item-title>
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
import catAPI from '../services/catalog.js'
import { useCatalogStore } from '@/stores/store'

export default {
  data: () => ({
    store: useCatalogStore(),
    catalog: [],
    searchInput: '',
    name: '',
    plan: '',
    hiring_day: '',
    unsublink: '',
    instructions: '',
    payment_method: ''
  }),
  computed: {
    dialog () {
      return this.store.dialogState
    },
    search () {
      return this.catalog.filter(sub => sub.name.toLowerCase().includes(this.searchInput.toLowerCase()))
    }
  },
  async created () {
    const catalog = await catAPI.getCatalog()
    this.catalog = catalog
  },
  methods: {
    showAddSub (plan, sub) {
      this.$emit('show-add-sub', plan, sub)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
