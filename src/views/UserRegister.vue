<template>
  <el-form ref="form" class="form" auto-complete="on"
           label-position="left">
    <div class="title-container">
      <h3 class="title">注册成为八路军！</h3>
    </div>
    <MyInput v-model="text" placeholder="Username" type="text" tabindex="1" auto-complete="on">
      <template v-slot:prefix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
    </MyInput>
    <el-slider v-model="registerForm.phoneNumber" :min="phoneMin" :max="phoneMax" :format-tooltip="format"/>
    <MyInput :model-value="format(registerForm.phoneNumber)" placeholder="PhoneNumber" type="text" tabindex="1" auto-complete="on">
      <template v-slot:prefix>
        <el-icon>
          <Phone/>
        </el-icon>
      </template>
    </MyInput>
    <MyInput ref="password" v-model="registerForm.password" placeholder="Password"
             name="password" tabindex="3" auto-complete="on" prop="password"
             :type="passwordType">
      <template v-slot:prefix>
        <el-icon>
          <Lock/>
        </el-icon>
      </template>
      <template v-slot:suffix>
          <span @click="showPwd">
            <el-icon>
              <Bell v-if="passwordType === 'password'"/>
              <BellFilled v-if="passwordType !== 'password'"/>
            </el-icon>
          </span>
      </template>
    </MyInput>
    <MyInput ref="password" v-model="registerForm.confirmPassword" placeholder="Confirm password"
             name="password" tabindex="4" auto-complete="on" prop="password"
             :type="passwordType">
      <template v-slot:prefix>
        <el-icon>
          <Lock/>
        </el-icon>
      </template>
      <template v-slot:suffix>
          <span @click="showPwd">
            <el-icon>
              <Bell v-if="passwordType === 'password'"/>
              <BellFilled v-if="passwordType !== 'password'"/>
            </el-icon>
          </span>
      </template>
    </MyInput>
    <input v-model="text">
  </el-form>

</template>

<script setup>
import MyInput from "@/components/MyInput";
// eslint-disable-next-line no-unused-vars
import {Avatar, Lock, Bell, BellFilled, Phone} from '@element-plus/icons-vue';
</script>

<script>
export default {
  name: "UserRegister",
  data() {
    return {
      registerForm: {
        username: '',
        phoneNumber: 0,
        password: '',
        confirmPassword: ''
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      text: "",
      phoneMin: 0,
      phoneMax: 100000
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    format(value) {
      // - (x - (a + b) / 2)
      if (value === 0) return 10000000000;
      else if(value === this.phoneMax) return 99999999999;
      let pMin = 100000;
      let pMax = 999999;
      let prefix = Math.floor(value * (pMax - pMin) / this.phoneMax + pMin);
      let suffix = pMin + pMax - prefix;
      return parseInt((prefix * pMin + suffix).toString());
    }
  }
}
</script>

<style>
@import url(~@/assets/css/background-img.css);
</style>

<style lang="scss">
$light_gray: #fff;

.form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.title-container {
  position: relative;

  .title {
    font-size: 30px;
    color: $light_gray;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: 500;
    -webkit-text-stroke: 1px black;
  }
}
</style>