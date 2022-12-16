<template>
  <div>
    <ProfileBarVue />
    <v-container class="text-center">
      <v-container>
        {{ new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}
      </v-container>
      <v-calendar>
      </v-calendar>
    </v-container>
  </div>
</template>

<script>
import ProfileBarVue from '@/components/ProfileBar.vue'

export default {
  components: {
    ProfileBarVue
  }
}
</script>

<style scoped>

</style>
