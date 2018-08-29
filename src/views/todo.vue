<template>
    <div class="todo">
        <div class="todo-in">
            <input v-model.trim="inTodoItem" />
            <button @click="addTodoItem">Add</button>
        </div>
        <div class="todo-out">
            <div class="todo-out-title">Todo List:</div>
            <ul>
                <todo-list v-for="item in items" :key="item.id" v-bind:todo="item"></todo-list>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'todo',
    data () {
        return {
            inTodoItem: "",
            items: []
        }
    },
    computed: {

    },
    methods: {
        addTodoItem() {
            if (!this.inTodoItem) {
                return;
            }
            this.items.push({
                id: this.items.length,
                text: this.inTodoItem
            });
            this.inTodoItem = "";
            console.log(this.items);
        }
    }
}
</script>

<style scoped>
.todo-out {
    margin: 10px 0px 0px 10px;
}
.todo-out-title {
    text-align: left;
}
</style>


