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
            <todo-list v-for="item in items" v-bind:todo="item" v-bind:key="item.id">
            </todo-list>
        </ul>
        <ul>
            <li>
                <input v-model="inputValue" />
            </li>
            <li>
                被逆序后的结果：{{ reverseValue }}
            </li>
            <li>
                Watch - 被逆序后的结果：{{ watchValue }}
            </li>
        </ul>
        <ul>
            <li>属性和计算属性的区别：</li>
            <li>{{ propTime }}</li>
            <li>{{ computedTime }}</li>
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
            propTime: Date.now(),
            inputValue: "",
            watchValue: "",
            msg: '条件渲染',
            vShowBoolean: true,
            items: [
                { id: 0, text: "This is one List" },
                { id: 1, text: "This is one List" },
                { id: 2, text: "This is one List" },
                { id: 3, text: "This is one List" }
            ]
        }
    },
    computed: {
        computedTime () {
            return Date.now();
        },
        reverseValue () {
            return this.inputValue.split('').reverse().join('');
        }
    },
    watch: {
        reverseValue () {
            this.watchValue = this.inputValue;
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