<template>
    <div class="s2">
        <span>{{title}}</span>
        <div class="basic" v-bind:class="arrayClass"></div>
        <div class="basic" v-bind:class="objectClass"></div>
        <div class="basic" v-bind:class="[activeClass, chooseClass]"></div>
        
        <button-counter></button-counter>        
        <button class="btn-blue" @click="goTodoList">跳转TodoList</button>
    </div>
</template>

<script>
export default {
    name: 's2',
    data () {
        return {
            title: 'Class与Style绑定',
            showObjStyle1: true,
            showObjStyle2: false,
            activeClass: 'on-cur',
            chooseClass: 'on-choose'
        }
    },
    computed: {
        arrayClass() {
            return ['array1', 'array2'];
        },
        objectClass() {
            return {
                object1: this.showObjStyle1,
                object2: this.showObjStyle2
            }
        }
    },
    methods: {
      goTodoList () {
        this.$router.push({
          name: 'todo',
          param: 'key=1'
        });
      }
    }
}
</script>

<style lang='scss' scoped>
    @import url(../assets/css/s2.scss);
</style>