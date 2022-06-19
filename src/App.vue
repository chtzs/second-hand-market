<template>
  <div class="container">
    <MyHeader></MyHeader>
    <!--  <img alt="Vue logo" src="./assets/logo.png">-->
    <router-view></router-view>
    <MyFooter class="app-footer"></MyFooter>
  </div>
</template>

<script>

import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";

export default {
  name: 'App',
  components: {MyFooter, MyHeader}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
}

.app-footer {
  margin-top: 20px;
}

.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
