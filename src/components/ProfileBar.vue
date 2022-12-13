<template>
  <v-bottom-navigation v-model="value">
    <RouterLink :to="{ name: 'subscription' }" style="text-decoration: none; color: inherit; height: 100%;">
      <v-btn value="subs">
        <span>Subs</span>
        <v-icon>mdi-subtitles-outline</v-icon>
      </v-btn>
    </RouterLink>

    <RouterLink :to="{ name: 'notification' }" style="text-decoration: none; color: inherit; height: 100%;">
      <v-btn value="balance">
        <span>Notifications</span>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </RouterLink>

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
import { RouterLink } from 'vue-router'

export default {
  data: () => ({ value: 'recent' }),
  components: { RouterLink }
}
</script>

<style scoped>

</style>
