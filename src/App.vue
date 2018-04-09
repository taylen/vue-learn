<template>
    <div id="app">
        <img src="./assets/logo.png"/>
        <!-- 使用动态的 transition name -->
        <transition :name="transitionName">
            <router-view class="child-view">
                <!-- 路由匹配到的组件将渲染在这里 -->
            </router-view>
        </transition>
    </div>
</template>
<script>
    export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
.child-view {
  position: absolute;
  width:100%;
  height: 25rem;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(320px, 0);
  transform: translate(320px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-320px, 0);
  transform: translate(-320px, 0);
}
</style>
