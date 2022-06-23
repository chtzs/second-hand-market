<template>
  <el-form ref="form" class="form" auto-complete="on"
           label-position="left">
    <div class="title-container">
      <h3 class="title">注册成为八路军！</h3>
    </div>
    <MyInput v-model="registerForm.nickname" placeholder="Nickname" type="text" tabindex="1" auto-complete="on">
      <template v-slot:prefix>
        <el-icon>
          <Avatar/>
        </el-icon>
      </template>
    </MyInput>
    <MyInput v-model="registerForm.phoneNumber" placeholder="PhoneNumber" type="text" tabindex="1"
             auto-complete="on">
      <template v-slot:prefix>
        <el-icon>
          <Phone/>
        </el-icon>
      </template>
    </MyInput>
    <el-row style="height: 50px;width: 100%;margin-top: 10px;">
      <MyInput v-model="captcha" placeholder="图形验证码" style="flex: 1"></MyInput>
      <img :src="captchaUrl" width="110" height="40" alt="验证码" @click="captchaUrl = captchaBase + '?' + Math.random()"/>
    </el-row>
    <el-button type="success" style="width: 100%;margin: 10px 0;" @click="send">发送手机验证码！</el-button>
    <MyInput v-model="code" placeholder="手机验证码" style="flex: 1">
      <template v-slot:prefix>
        <el-icon>
          <Message/>
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
    <el-button type="success" style="width: 100%;" @click="register">注册！</el-button>
  </el-form>

</template>

<script setup>
import MyInput from "@/components/MyInput";
// eslint-disable-next-line no-unused-vars
import {Avatar, Lock, Bell, BellFilled, Phone, Message} from '@element-plus/icons-vue';
</script>

<script>
export default {
  name: "UserRegister",
  data() {
    return {
      registerForm: {
        nickname: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      captchaBase: this.$target + 'api/captcha',
      captchaUrl: this.$target + 'api/captcha',
      captcha: '',
      code: ''
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
    register() {
      if (this.registerForm.password !== this.registerForm.confirmPassword) {
        this.notifyError("两次密码不一致");
        return;
      }
      this.$axios.get('user/register', {
        params: {
          nickname: this.registerForm.nickname,
          phoneNumber: this.registerForm.phoneNumber,
          password: this.registerForm.password,
          code: this.code
        }
      }).then((data) => {
        this.notifySucceed(data.msg);
        this.$router.push('/login');
      }).catch(() => {
      });
    },
    send(){
      this.$axios.get('sms/send', {
        params: {
          captcha: this.captcha,
          phoneNumber: this.registerForm.phoneNumber
        }
      }).then(data => {
        this.notifySucceed(data.msg);
      }).catch();
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
  padding: 50px 35px 0;
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