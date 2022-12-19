<template>
  <div class="loading" style="height:40%" >
    <v-progress-circular
      :size="70"
      :width="10"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
.loading{
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
