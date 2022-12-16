<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="hero">
        Your subscriptions, all in one place
      </h1>
      <h3 class="subtitle">
        Rinku is a web service that allows you to gather all your subscriptions info together. No more undesired charges due to forgetting to cancel in time! Let Rinku remind you about them!
      </h3>
      <div class="logandsign">
          <v-btn
            :to="{name: 'signup'}"
            rounded
            class="px-10 py-5"
            color="primary"
            dark
          > Get Started </v-btn>
        <RouterLink to="login" class="sign">Already a member?</RouterLink>

      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-image: url(../assets/homeImage.jpg);
  background-size: cover;
}
.container {
  // background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 1));
  background: linear-gradient(0deg, rgba(255,255,255,) 10%, rgba(0,0,0,0.7) 65%);
  height: 36rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.hero {
  font-family: 'Mukta', sans-serif;
  font-size: 40px;
  color: white;
  margin: 0 1.5rem;
  margin-top: 1.5rem;
}
.subtitle {
  color: white;
  margin: 0 1.5rem;
  margin-top: 0.5rem;
  font-weight: normal;
  font-size: medium;
}
.logandsign {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign {
  margin-top: 1rem;
  text-decoration: none;
  font-weight: bold;
}
</style>
