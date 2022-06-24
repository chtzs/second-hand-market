<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.$router.push('/login')
  }
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

.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
