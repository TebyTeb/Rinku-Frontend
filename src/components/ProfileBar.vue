<template>
  <v-bottom-navigation v-model="value">
    <RouterLink :to="{ name: 'subscription' }" class="links">
      <v-btn class="pa-0" value="subs">
        <span>Subs</span>
        <v-icon>mdi-subtitles-outline</v-icon>
      </v-btn>
    </RouterLink>

    <RouterLink :to="{ name: 'notification' }" class="links">
      <v-btn class="pa-0" value="notification">
        <span>Notifs</span>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </RouterLink>

    <RouterLink :to="{ name: 'calendar' }" class="links">
    <v-btn class="pa-0" value="calendar">
      <span>Calendar</span>
      <v-icon>mdi-calendar</v-icon>
    </v-btn>
    </RouterLink>

    <RouterLink :to="{ name: 'balance' }" class="links">
      <v-btn class="pa-0" value="balance">
        <span>Balance</span>
        <v-icon>mdi-cash</v-icon>
      </v-btn>
    </RouterLink>

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
.links {
  text-decoration: none;
  color: inherit;
  height: 100%;
}
</style>
