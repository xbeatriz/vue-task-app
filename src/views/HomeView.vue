<template>
    <div>
        <h1>Lista de tarefas</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id">
                    <td>{{ task.id }}</td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.status }}</td>
                    <td>
                        <button @click="tasksDetails(task.id)">Details</button>
                        <button @click="deleteTask(task.id)">X</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore";
import { computed } from "vue";

export default {
    setup() {
        const taskStore = useTaskStore();

        // Computed property para reatividade
        const tasks = computed(() => taskStore.tasks);

        // Função de deletar tarefa
        const deleteTask = (id) => {
            taskStore.deleteTask(id);
        };

        return { tasks, deleteTask };
    },
    methods: {
        tasksDetails(id) {
            this.$router.push(`/tasks/${id}`);
        },
    },
};
</script>
