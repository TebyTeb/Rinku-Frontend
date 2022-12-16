<template>
  <div>
    <div class="faq">
      <h1>FAQ</h1>
      <span>Frequently Asked Questions</span>
      <hr class="mx-7 divider" color="orange"/>
    </div>
    <questionComp v-for="info, idx in questions" :key="idx" :data=info />
  </div>
</template>

<script>
import questionComp from '../components/QuestionComp.vue'
export default {
  components: {
    questionComp
  },
  data () {
    return {
      questions: [
        {
          tittle: 'Can I add personalized subscriptions?',
          text: 'I\'ts not implemented right now, we aim to include it in future releases'
        },
        {
          tittle: 'Does Rinku handle payments?',
          text: 'This service does not manage any payment, it helps you control your expenses in streaming platforms & other subscriptions services, all in one place.'
        },
        {
          tittle: 'Is Rinku selling our info?',
          text: 'We don\'t sell any personal info from our users, we only use statistical data gathered from our database that doesn\'t expose your personal data, in due to the local laws.'
        },
        {
          tittle: 'Will Rinku be available in mobile platforms?',
          text: 'We are currently working hard in order to turn the site into a PWA that will be installable in mobile devices among other platforms.'
        },
        {
          tittle: 'Will Rinku keep being free?',
          text: 'The base app will be completely free, and there will be paid upgrade packages for those who want to get all the functionalitis Rinku can offer.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  text-align: center;
  margin: 50px;
  font-family: 'Mukta', sans-serif;
}
.divider {
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.75);
}
</style>
