<template>
  <div class="container">
<!--    <MyHeader login-url="/login" register-url="/register" home-url="/"></MyHeader>-->
    <router-view></router-view>
  </div>
<!--  <MyFooter></MyFooter>-->
</template>

<script>
// import MyHeader from "@/components/MyHeader";
// import MyFooter from "@/components/MyFooter";

export default {
  name: 'LoginPage',
  // components: {MyFooter, MyHeader}
}
</script>

<style scoped>

</style>