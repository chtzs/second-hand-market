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
  created() {
    this.$axios.get("user/detail").then(data => {
      if (data.identity === 0) {
        this.notifyError("你没有权限");
        this.$router.push('/home');
      }
    }).catch(() => {
      this.$router.push('/home');
    });
  }
}
</script>

<style scoped>

</style>