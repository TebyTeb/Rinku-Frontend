<template>
  <div>
    <heroComp />
    <commentsComp />
    <exampleComp />
  </div>
</template>

<script>
import heroComp from '../components/HeroComp.vue'
import exampleComp from '../components/ExampleComp.vue'
import commentsComp from '../components/CommentsComp.vue'
export default {
  name: 'HomeView',
  components: {
    heroComp,
    exampleComp,
    commentsComp
  }
}
</script>
<style scoped>
.tittle {
  font-size: 40px;
}
</style>
