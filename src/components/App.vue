<template>
    <div id="app">
        <img src="../assets/images/logo.png"/>
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

<style lang='scss' scoped>
  @import url(../assets/css/app.scss);
</style>
