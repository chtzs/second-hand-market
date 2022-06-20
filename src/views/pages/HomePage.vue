<template>
  <el-backtop :right="50" :bottom="100"/>
  <div class="container">
    <my-header></my-header>
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
  components: {MyFooter, MyHeader, SearchBar},
  methods: {
    search() {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 20px 20px;
}
</style>