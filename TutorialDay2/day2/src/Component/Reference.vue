<template>
  <div class="demo-ref">
    <h1>Demo Reference</h1>
    <input ref="inputRef" type="file" style="display: none;">
    <button v-on:click="handleChangeAvt" class="changeAvt">Change avatar</button>
  </div>
</template>

<script>
export default {
    name: 'demo-ref',
    data() {
        return {

        }
    },
    methods: {
        handleChangeAvt() {
            this.$refs.inputRef.click();
        }
    }
}
</script>

<style>
    .demo-ref {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }
    .changeAvt {
        padding: 8px 12px;
        color: #fff;
        background-color: #000;
        border: 1px solid #333;
        transition: all .2s ease;
    }

    .changeAvt:hover {
        color: #333;
        background-color: #fff;
    }
</style>