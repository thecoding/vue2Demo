<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html{
  width: 100%;
  height: 100%;
}
body {
  // background:url('images/login_bg.png') no-repeat; 
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
