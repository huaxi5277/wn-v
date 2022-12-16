<template>
  <div class="template-container">vue3.0-template</div>
  <bgVueComponent></bgVueComponent>
</template>

<script>
import bgVueComponent from "@/vue/components/bg-vue-component/index.vue";
export default {
  name: "App",
  components: {
    bgVueComponent,
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
  .template-container {
    position: absolute;
    z-index: 10;
    text-align: center;
    color: #fff;
    top: 50%;
    left: 50%;
  }
</style>