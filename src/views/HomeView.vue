<template>
  <div>
    <heroComp />
    <commentsComp />
    <exampleComp />
    <teamComp />
  </div>
</template>

<script>
import heroComp from '../components/HeroComp.vue'
import exampleComp from '../components/ExampleComp.vue'
import commentsComp from '../components/CommentsComp.vue'
import teamComp from '../components/TeamComp.vue'
export default {
  name: 'HomeView',
  components: {
    heroComp,
    exampleComp,
    commentsComp,
    teamComp
  }
}
</script>
<style scoped>
</style>
