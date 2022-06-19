<template>
  <div class="avatar-box">
    <img :src="src" :alt="alt">
  </div>
</template>

<script>
export default {
  name: "MyAvatar",
  props: {
    src: String,
    alt: String
  }
}
</script>

<style lang="scss" scoped>
.avatar-box {
  margin: 0 auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #409eff;
  box-shadow: 0 0 10px #409eff;
  bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>