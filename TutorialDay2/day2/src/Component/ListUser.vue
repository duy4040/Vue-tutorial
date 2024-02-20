<template>
  <div class="list-user">
    <User 
      v-on:deleteUser="deleteUser"
      class="user"
      v-for="user in listUser"
      v-bind:key="user.id"
      v-bind:user="user"
     />
  </div>
</template>

<script>
import User from './User.vue';
export default {
    components: { User },
    props: {
      listUser: {
        type: Array,
        default: []
      }
    },
    name: 'list-user',
    data() {

    },
    methods: {
      deleteUser(data) {
        this.$emit('deleteUserEvent', data)
      }
    }
}
</script>

<style>
  .list-user {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list-user .user {
    padding: 30px;
    margin-bottom: 30px;
    border: 1px solid #000;
    width: 25%;
  }
</style>