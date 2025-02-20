<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'inactive'">User is inactive</p>
  <p v-else>User is pending</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>



<script setup>
//? SMALL VERSION
import { ref } from 'vue';  // ref is a function that creates a reactive reference

const name = ref('John Doe');
const status = ref('active');
const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
const newTask = ref('');

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
}

const addTask = () => {
  if (newTask.value.trim() != '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}


</script>
<!-- <script>
//? LARGE VERSION
import { ref } from 'vue';  // ref is a function that creates a reactive reference

export default {
  setup() {
    const name = ref('John Doe');
    const status = ref('active');
    const tasks = ref(['Task 1', 'Task 2', 'Task 3']);

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    }

    return {
      name,
      status,
      tasks,
      toggleStatus
    } 
  }
} 
</script>
-->

<style></style>