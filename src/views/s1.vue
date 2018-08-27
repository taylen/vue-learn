<template>
    <div class="s1">
        <h3>{{msg}}</h3>
        <div>v-if/v-else是否展示：</div>
        <div v-if="Math.random() > 0.5">
            Now You can see me.
        </div>
        <div v-else>
            Now You can't.
        </div>
        <ul>
            <li v-show="vShowBoolean">是否展示v-show</li>
        </ul>
        <ul>
            <li v-for="item in items">
                {{ item.message }}
            </li>
        </ul>


        <button-counter></button-counter>
        <button class="btn-blue" @click="jumpS2">Go To S2</button>
    </div>
    
</template>

<script>
export default {
    name: 's1',
    data () {
        return {
            msg: '条件渲染',
            vShowBoolean: true,
            items: [
                { message: "This is one List" },
                { message: "This is one List" },
                { message: "This is one List" },
                { message: "This is one List" }
            ]
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