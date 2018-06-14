<template>
    <div class="s1">
        <span>{{msg}}</span>
        <div>
            <button-counter></button-counter>
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

<style lang='scss' scoped>
    @import url(../assets/css/s1.scss);
</style>