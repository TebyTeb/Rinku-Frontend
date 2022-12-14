<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5 mx-auto">Delete confirmation</span>
          </v-card-title>
          <v-card-text justify="center" class="text-center">
            Sure you want to delete this subscription?
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" rounded dark class="mx-auto mb-5" @click="close">
              NO
            </v-btn>
            <v-btn color="primary" rounded outlined class="mx-auto mb-5"  @click="deleteSub">
              YES
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: true
  }),
  props: {
    sub: Object
  },
  methods: {
    close () {
      this.$emit('close-card')
    },
    deleteSub () {
      this.$emit('delete-sub')
      this.$emit('close-card')
    }
  }
}
</script>

<style scoped>

</style>
