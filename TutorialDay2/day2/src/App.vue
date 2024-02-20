<template>
  <div id="app">
    <CompHeader 
      v-bind:title="titleHeader" 
      v-on:changeTitleHeaderEvent="handleChangeTitleHeader"
    />
    <ListUser v-bind:listUser="listUser" v-on:deleteUserEvent="handleDeleteUser" />
    <CompFooter v-bind:title="titleFooter" />
    <Reference />
    <Slot />
  </div>
</template>

<script>
import ListUser from "./Component/ListUser.vue";
import CompHeader from "./Component/CompHeader.vue"
import CompFooter from "./Component/CompFooter.vue";
import Reference from "./Component/Reference.vue";
import Slot from "./Component/Slot.vue";
export default {
  components: { CompHeader, CompFooter, ListUser, Reference, Slot },
  name: 'app',
  data () {
    return {
      titleHeader: 'Header',
      titleFooter: 'Footer',
      listUser: [
        { id:1, email: 'test1@gmail.com', active: false},
        { id:2, email: 'test2@gmail.com', active: true},
        { id:3, email: 'test3@gmail.com', active: false},
        { id:4, email: 'test4@gmail.com', active: true},
        { id:5, email: 'test5@gmail.com', active: true},
        { id:6, email: 'test6@gmail.com', active: true},
        { id:7, email: 'test7@gmail.com', active: true},
        { id:8, email: 'test8@gmail.com', active: true},
        { id:9, email: 'test9@gmail.com', active: true},
      ]
    }
  },
  methods: {
    handleChangeTitleHeader(data) {
      this.titleHeader = data.title;
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((user, index) => {
        if(user.id === data.id) {
          indexDelete = index
        }
      })

      if(indexDelete != -1) {
        this.listUser.splice(indexDelete, 1);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
