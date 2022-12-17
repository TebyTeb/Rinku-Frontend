<template>
  <div>
    <ProfileBar />
    <v-container>
      <v-btn
      v-if="chartType === 'bar'" @click="chartType = 'donut'"
      tile
      color="primary"
    >
      <v-icon left>
        mdi-chart-pie
      </v-icon>
      Donut Chart
    </v-btn>
  <v-btn
      v-if="chartType === 'donut'" @click="chartType = 'bar'"
      tile
      color="primary"
    >
      <v-icon left>
        mdi-chart-box
      </v-icon>
      Bar Chart
    </v-btn>
    </v-container>
    <DonutChart v-if="chartType === 'donut'"/>
    <BarChart v-if="chartType === 'bar'"/>

  </div>
</template>

<script>
import ProfileBar from '@/components/ProfileBar.vue'
import DonutChart from '@/components/DonutChart.vue'
import BarChart from '@/components/BarChart.vue'

export default {
  data: () => ({
    chartType: 'donut'
  }),
  components: {
    ProfileBar,
    DonutChart,
    BarChart
  }

}
</script>

<style scoped>

</style>
