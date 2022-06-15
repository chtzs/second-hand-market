<template>
  <el-form ref="form" class="form" auto-complete="on"
           label-position="left">
    <MyInput v-model:text="text" placeholder="Username" type="text" tabindex="1" auto-complete="on">
      <template v-slot:prefix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
      <template v-slot:suffix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
    </MyInput>
    <MyInput v-model:text="text" placeholder="Password" type="password" tabindex="1" auto-complete="on">
      <template v-slot:prefix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
      <template v-slot:suffix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
    </MyInput>
    <MyInput v-model:text="text" placeholder="Confirm password" type="password" tabindex="1" auto-complete="on">
      <template v-slot:prefix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
      <template v-slot:suffix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
    </MyInput>
    <input v-model="text">
  </el-form>

</template>

<script setup>
import MyInput from "@/components/MyInput";
// eslint-disable-next-line no-unused-vars
import {Avatar, Lock, Bell, BellFilled} from '@element-plus/icons-vue';
</script>

<script>
export default {
  name: "UserRegister",
  data() {
    return {
      // 头像状态
      TxStatus: true,
      registerForm: {
        username: '',
        password: ''
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      text: ""
    }
  }
}
</script>

<style>
@import url(~@/assets/css/background-img.css);
</style>

<style lang="scss">
.form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
</style>