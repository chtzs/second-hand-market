<template>
  <div class="description-item">
    <el-row :gutter="100" justify="start">
      <el-col :span="4">
        <div class="circle">
        <span>
          {{ circle }}
        </span>
        </div>
      </el-col>
      <el-col style="display: flex;align-items: center;" :span="20">
        <div class="rect">
        <span>
          {{ rect }}
        </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DescriptionItem",
  props: {
    circle: String,
    rect: String
  }
}
</script>

<style lang="scss" scoped>
$radius: 80px;
$rect-width: 200px;
$rect-height: 40px;

.circle {
  width: $radius;
  height: $radius;
  border-radius: 50%;
  border: 1px solid #409eff;
  box-shadow: 0 0 10px #409eff;
}

.rect {
  border: 1px solid #409eff;
  box-shadow: 0 0 10px #409eff;
  width: $rect-width;
  height: $rect-height;
}

.circle, .rect {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}
</style>