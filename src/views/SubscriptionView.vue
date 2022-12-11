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
  </div>

</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import SubCard from '@/components/SubCard.vue'

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
    ]
  }),
  methods: {
    search () {
      alert('clicked OK!') /* Arreglar eso!! */
    }
  },
  async created () {

  }
}
</script>

<style scoped>

</style>
