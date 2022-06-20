<template>
  <div class="container">
    <my-header></my-header>
    <router-view></router-view>
  </div>
  <my-footer></my-footer>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";

export default {
  name: "HomePage",
  components: {MyFooter, MyHeader}
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>