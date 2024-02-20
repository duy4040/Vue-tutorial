<template>
  <Header>
    <h1>{{ title }}</h1>
    <button v-on:click="changeTitle">Change title header</button>
</Header>
</template>

<script>
export default {
    name: "comp-header",
    props: {
        title: String
    },
    data() {
        return {
       
        }
    },
    methods: {
        changeTitle(e) {
            var data = {
                title: 'Header title'
            }
            this.$emit('changeTitleHeaderEvent', data)
        }
    }
}
</script>

<style>

</style>