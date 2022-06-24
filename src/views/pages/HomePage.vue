<template>
  <el-backtop :right="50" :bottom="100"/>
  <div class="container">
    <my-header home-url="/home">
      <template v-slot:right>
        <div class="link-list">
          <el-link v-if="!login" :href="loginUrl">登录</el-link>
          <el-link v-if="!login" :href="registerUrl">注册</el-link>
          <el-link v-if="login" href="/my/goods">我的商品</el-link>
          <el-link v-if="login" href="/my/order">我的订单</el-link>
          <el-link v-if="login" href="/my/post">发布商品</el-link>
          <el-link v-if="admin" :href="adminCenter">管理中心</el-link>
        </div>
      </template>
    </my-header>
    <div class="content">
      <search-bar @on-search="search"></search-bar>
      <router-view></router-view>
    </div>
  </div>
  <my-footer></my-footer>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
import SearchBar from "@/components/SearchBar";

export default {
  name: "HomePage",
  // eslint-disable-next-line vue/no-unused-components
  components: {MyFooter, MyHeader, SearchBar},
  data() {
    return {
      loginUrl: "/login",
      registerUrl: "/register",
      userCenter: "",
      adminCenter: "/management/user",
      login: false,
      admin: false
    }
  },
  created() {
    this.$axios.get("user/detail").then(data => {
      this.admin = data.data.identity === 1;
    }).catch(() => {
      window.location = '/login';
    });
    this.login = this.$cookie.has('token');
  },
  methods: {
    search() {

    }
  }
}
</script>

<style lang="scss" scoped>
$content-child-margin: 10px;

.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  //background-color: #42b983;
}

.content {
  min-height: 100vh;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  //background-color: #99a9bf;
}

.link-list {
  * {
    margin: 0 $content-child-margin;
    height: 100%;
  }
}
</style>