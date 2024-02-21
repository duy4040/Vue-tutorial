<template>
    <li>
        <button v-bind:class="className" @click="$emit('complete')"><i class="far fa-circle"></i><div>{{ task.title }}</div></button>
        <button @click="$emit('remove')"><i class="far fa-trash-alt"></i></button>
    </li>
</template>

<script>
export default {
    name: 'task-item',
    props: ['task'],
    computed: {
        className() {
            var classes = ['toggle']
            if(this.task.completed) {
                classes.push('toggle-completed')
            }
            return classes
        }
    }
}
</script>