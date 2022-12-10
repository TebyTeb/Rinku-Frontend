<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="subs">
      <span>Subs</span>

      <v-icon>mdi-subtitles-outline</v-icon>
    </v-btn>

    <v-btn value="balance">
      <span>Notifications</span>

      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn value="calendar">
      <span>Calendar</span>

      <v-icon>mdi-calendar</v-icon>
    </v-btn>

    <v-btn value="balance">
      <span>Balance</span>

      <v-icon>mdi-cash</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 'recent' })
}
</script>

<style scoped>

</style>
