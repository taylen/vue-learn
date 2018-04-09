<template>
    <div class="s1">
        <span>{{msg}}</span>
        <div>
            <button class="btn-blue" @click="jumpS2">Go To S2</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 's1',
    data () {
        return {
            msg: 'This is s1.'
        }
    },
    methods: {
        jumpS2() {
            this.$router.push({
                name: 's2',
                param: 'key=1'
            });
        }
    }
}
</script>

<style scoped>
    .s1{
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