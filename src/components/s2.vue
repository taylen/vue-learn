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

<style scoped>
    .s2{
        font-size: 2rem;
    }
    .btn-blue{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3rem;
      background-color: rgba(0, 0, 255, 0.44);
      color: white;
      font-size: 1.2rem;
    }
</style>