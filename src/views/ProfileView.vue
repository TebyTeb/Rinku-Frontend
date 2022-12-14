<template>
  <div>
    <div
      class="cartel"
    >
      <h2>Profile</h2>
      <p>Hello, {{profile.name}}! Want to modify your data?</p>
    </div>
    <v-container class="logger">
    <ProfileCard :profile="profile"/>
    </v-container>
  </div>
</template>

<script>
import userAPI from '../services/user'
import ProfileCard from '../components/ProfileCard.vue'
export default {
  components: {
    ProfileCard
  },
  data: () => ({
    profile: {}
  }),
  async created () {
    const profile = await userAPI.getProfile()
    this.profile = profile
  }
}
</script>

<style scoped>
.cartel {
  position: fixed;
  top: 55px;
  z-index: 1;
  padding-left: 1rem;
  background-color: #DD7225;
  color: white;
  width: 100%;
  height: 70px;
  border-radius: 0 0 5rem 0;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.59);
}
.logger {
  padding-top: 100px;
}
</style>
