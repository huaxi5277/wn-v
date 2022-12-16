<template>
  <img :src="BG" class="img-c" />
</template>

<script>
import BG from '@img/ailin.webp';
export default {
  name: "bg-vue-component",
  data: function () {
    return {
      BG
    }
  }
}
</script>

<style scoped >
  .img-c {
    width: 100%;
    height: 100vh;
  }
</style>