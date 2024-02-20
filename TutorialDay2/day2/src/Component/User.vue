<template>
    <div class="user">
        <h3>{{ user.email }}</h3>
        <button v-on:click="deleteUser">Delete</button>
    </div>
</template>

<script>
export default {
    name: "user",
    props: {
        user: {
            type: Object,
            default: {}
        }
    },  
    data() {
        return {
            text: 'User'
        }
    },
    methods: {
        deleteUser() {
            var data = {
                id: this.user.id
            }
            this.$emit('deleteUser', data)
        }
    }
}
</script>

<style>
    .user {
        position: relative;
    }
    .user button {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>