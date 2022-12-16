<template>
  <div>
    <ProfileBar />
    <DonutChart />

  </div>
</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import DonutChart from '@/components/DonutChart.vue'

export default {
  components: {
    ProfileBar,
    DonutChart
  }

}
</script>

<style scoped>

</style>
