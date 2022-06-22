<template>
  <el-affix>
    <el-row class="nav-bar">
      <el-col :span="4">
        <el-row class="content" justify="start">
          <div class="logo">
            <img alt="Avatar" src="@/assets/logo.png">
          </div>
          <el-link :href="homeUrl">首页</el-link>
        </el-row>
      </el-col>
      <el-col :span="20">
        <el-row class="content" justify="end">
          <slot name="right"/>
        </el-row>
      </el-col>
    </el-row>
  </el-affix>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    homeUrl: String
  },
  methods: {
    setLogin(login) {
      this.login = login;
    }
  }
}
</script>

<style lang="scss" scoped>
$padding-left-right: 80px;
$content-child-margin: 10px;

.nav-bar {
  justify-content: center;
  padding: 0 $padding-left-right;
  border-bottom: 1px solid #cccccc;
  background-color: white;
}

.content {
  height: 100%;
}

.logo {
  text-align: start;
  padding: 5px 0;

  img {
    width: 40px;
    height: 40px;
  }
}
</style>