<template>
    <li>
        {{ todo.text }}
    </li>
</template>

<script>
export default {
    name: 'todo-list',
    props: [ 'todo' ]
    // props: {
    //     todo: Object
    // }
}
</script>
