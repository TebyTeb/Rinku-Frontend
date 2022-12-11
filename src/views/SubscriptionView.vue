<template>
  <div>
    <ProfileBar />

    <v-container>
      <v-card-text>
        <v-row>
          <v-col cols="10">
            <div>
              <v-text-field label="Search" append-icon="mdi-magnify" @click:append="search" v-model="searchInput"></v-text-field>
            </div>
          </v-col>
          <v-col cols="2">
              <v-btn
                class="mx-auto" fab dark small color="primary">
                <v-icon dark>mdi-sort</v-icon>
              </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>

    <SubCard />

    {{ subs }}
  </div>

</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import SubCard from '@/components/SubCard.vue'
import subsAPI from '../services/subscription'

export default {
  components: {
    ProfileBar,
    SubCard
  },
  data: () => ({
    searchInput: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ],
    subs: []
  }),
  methods: {
    search () {
      alert('clicked OK!') /* Arreglar eso!! */
    }
  },
  async created () {
    const subs = await subsAPI.getSubs()
    this.subs = subs
  }
}
</script>

<style scoped>

</style>
