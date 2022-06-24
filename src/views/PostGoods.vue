<template>
  <div class="login-form">
    <MyInput v-model="goods.name" placeholder="商品名称" name="name" type="text"
             tabindex="1"
             auto-complete="on">
    </MyInput>
    <MyInput v-model="goods.image" placeholder="图片" name="image" type="text"
             tabindex="2"
             auto-complete="on">
    </MyInput>
    <MyInput v-model="goods.description" placeholder="描述" name="description" type="text"
             tabindex="3"
             auto-complete="on">
    </MyInput>
    <MyInput v-model="goods.fakePrice" placeholder="假价格" name="fakePrice" type="text"
             tabindex="4"
             auto-complete="on">
    </MyInput>
    <MyInput v-model="goods.actualPrice" placeholder="实际价格" name="actualPrice" type="text"
             tabindex="5"
             auto-complete="on">
    </MyInput>
    <MyInput v-model="goods.functionality" placeholder="功能性" name="functionality" type="text"
             tabindex="6"
             auto-complete="on">
    </MyInput>
    <MyInput v-model="goods.goodsCondition" placeholder="成色" name="goodsCondition" type="text"
             tabindex="7"
             auto-complete="on">
    </MyInput>
    <el-button type="success" @click="post" style="width: 100%;">发布！</el-button>
  </div>
</template>

<script>
import MyInput from "@/components/MyInput";

export default {
  name: "PostGoods",
  components: {MyInput},
  data() {
    return {
      goods: {
        name: '',
        image: '',
        description: '',
        fakePrice: '',
        actualPrice: '',
        functionality: '',
        goodsCondition: ''
      }
    }
  },
  methods: {
    post() {
      this.$axios.post("goods/post", {
        goods: this.goods
      }).then(res => {
        this.notifySucceed(res.msg);
        window.location = "/home";
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  background-color: #757575;
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 35px;
  margin: 0 auto;
  overflow: hidden;
}
</style>