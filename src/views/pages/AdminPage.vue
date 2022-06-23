<template>
  <div class="container">
    <el-container>
      <el-header>
        <my-header home-url="/home">
          <template v-slot:right>
            <div class="link-list">
              <el-link href="/management/user">用户管理</el-link>
              <el-link href="/management/goods">商品管理</el-link>
              <el-link href="/management/review">审核管理</el-link>
              <el-link href="/management/order">订单管理</el-link>
            </div>
          </template>
        </my-header>
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
      if (data.data.identity === 0) {
        this.notifyError("你没有权限");
        // this.$router.push('/home');
      }
    }).catch(() => {
      // this.$router.push('/home');
    });
  }
}
</script>

<style lang="scss" scoped>
$content-child-margin: 10px;
.link-list {
  * {
    margin: 0 $content-child-margin;
    height: 100%;
  }
}
</style>