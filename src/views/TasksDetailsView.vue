<template>
  <div v-if="task">
    <h1>{{ task.name }}</h1>
    <p>{{ task.description }}</p>
    <label>
      <input
        type="checkbox"
        v-model="task.status"
        true-value="online"
        false-value="offline"
      />
      Online
    </label>
    <button @click="saveChanges">Save</button>
  </div>
  <div v-else>
    <p>Task not found.</p>
  </div>
</template>
  
  <script>
import { useTaskStore } from "@/stores/taskStore";

export default {
  data() {
    return { task: null };
  },
  created() {
    this.fetchTask();
  },
  methods: {
    fetchTask() {
      const store = useTaskStore();
      const id = this.$route.params.id;
      this.task = store.tasks.find((d) => d.id.toString() === id);
    },
    saveChanges() {
      const store = useTaskStore();
      store.updateTasks([...store.tasks]);
      this.$router.push("/");
    },
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler() {
        this.fetchTask();
      },
    },
  },
};
</script>