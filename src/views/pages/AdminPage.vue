<template>
  <div class="container">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
  <my-footer></my-footer>
</template>

<script>
import MyFooter from "@/components/MyFooter";
import MyHeader from "@/components/MyHeader";

export default {
  name: "AdminPage",
  components: {MyFooter, MyHeader},
}
</script>

<style scoped>

</style>