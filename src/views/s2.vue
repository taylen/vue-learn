<template>
    <div class="s2">
        <span>{{msg}}</span>
        <div>
            <button class="btn-blue" @click="backIndex">回到首页</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 's2',
    data () {
        return {
            msg: 'This is s2.'
        }
    },
    methods: {
      backIndex () {
        this.$router.push({
          name: 'HelloWorld',
          param: 'key=1'
        });
      }
    }
}
</script>

<style lang='scss' scoped>
    @import url(../assets/css/s2.scss);
</style>