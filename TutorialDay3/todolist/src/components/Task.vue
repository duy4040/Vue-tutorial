<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input type="text" placeholder="New Task" v-model="newTask" @keyup.enter="addTask"/>
        <button @click="addTask"><i class="fas fa-plus"></i></button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <TaskItem 
            v-bind:task="task"
            v-for="(task, index) in tasks" 
            :key="task.id" 
            @remove="removeTask(index)"
            @complete="completeTask(task)"
            />
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="clearCompleted">Clear completed</button>
        <button @click="clearAll">Clear all</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: {{ incomplete }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
  components: {
    TaskItem
  },
  name: "Task",
  props: {
    tasks: {
      type: Array
    }
  },
  data() {
    return {
      newTask: ''
    }
  },
  computed: {
    incomplete() {
      return this.tasks.filter(this.inProgress).length
    },
  },
  methods: {
    clearAll() {
      this.tasks = []
    },
    isCompleted(task) {
      return task.completed
    },
    inProgress(task) {
      return !this.isCompleted(task)
    },
    clearCompleted() {
      this.tasks = this.tasks.filter(this.inProgress)
    },
    addTask() {
      if(this.newTask) {
        this.tasks.push({
          title: this.newTask,
          completed: false
        })
      }
      this.newTask = ''
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    completeTask(task) {
      task.completed = !task.completed
    }
  }
};
</script>

