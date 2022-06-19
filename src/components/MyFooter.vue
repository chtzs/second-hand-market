<template>
  <div class="footer">
    <el-row>
      <MyAvatar :src="require('@/assets/me.png')"/>
    </el-row>
    <el-row>
      <div>版权所有 HackChen™ © 2022</div>
    </el-row>
  </div>
</template>

<script>
import MyAvatar from "@/components/MyAvatar";

export default {
  name: "MyFooter",
  components: {MyAvatar}
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #757575;

  .el-row {
    width: 100%;
    justify-content: center;
    padding: 10px 0;
  }
}
</style>