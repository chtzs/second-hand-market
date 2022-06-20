<template>
  <!--搜索框-->
  <el-row class="mb-4" justify="center">
    <el-col :span="22">
      <el-input
          v-model="content"
          @keyup.enter="searchHandler"
          placeholder="搜索商品名称或者价格"
      />
    </el-col>
    <el-col :span="2">
      <el-button type="success" id="search" @click="searchHandler">搜索</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SearchBar",
  emits: ["onSearch"],
  data() {
    return {
      content: ""
    }
  },
  methods: {
    searchHandler() {
      this.$emit("onSearch", this.content);
    }
  }
}
</script>

<style scoped>

</style>