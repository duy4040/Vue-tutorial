<template>
    <div>
        <img src="../assets/restaurant-logo.webp" alt="" class="logo">
        <h1>Sign up</h1>

        <div class="register">
            <input type="text" placeholder="Enter Name">
            <input type="text" placeholder="Enter Email">
            <input type="password" placeholder="Enter Password">
            <button>Sign up</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sign-up',
    data() {
        return {

        }
    }
}
</script>

<style>
    .logo {
        width: 300px;
        height: 250px;
    }

    .register {
        margin-top: 20px;
    }

    .register input {
        display: block;
        width: 300px;
        height: 40px;
        padding-left: 20px;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid skyblue;
    }

    .register button {
        width: 300px;
        height: 40px;
        border: 1px solid skyblue;
        background-color: skyblue;
        color: #fff;
        cursor: pointer;
        transition: all .2s ease;
    }

    .register button:hover {
        opacity: 0.8;
    }
</style>