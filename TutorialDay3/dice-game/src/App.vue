<template>
  <div class="wrapper clearfix">
    <players />
    <control />
    <dice />
  </div>
</template>

<script>
import Players from './Components/Players.vue';
import Control from './Components/Control.vue';
import Dice from './Components/Dice.vue';

export default {
  name: 'app',
  components: {
    Players,
    Control,
    Dice
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(/public/assets/back.jpg);
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
</style>
