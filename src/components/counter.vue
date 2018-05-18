// Vue.component('button-counter', {
//     data() {
//         return {
//             count: 0
//         }
//     },
//     template: '<button style="width:100px;height:50px;" v-on:click="count++">You clicked me {{ count }} times</button>'
// });
<template>
    <button class="counter" v-on:click="count++">You clicked me {{ count }} times</button>
</template>

<script>
export default {
    name: 'counter',
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style scoped>
    .counter{
        width: 15rem;
        height: 2rem;
    }
</style>


