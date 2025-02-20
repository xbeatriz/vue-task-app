<template>
  <h1>Criar tarefa</h1>
  <label for="name">Nome</label>
  <input type="text" id="name" v-model="task.name" />
  <label for="status">Status</label>
  <input type="text" id="status" v-model="task.status" />
  <label for="description">Descrição</label>
  <input type="text" id="description" v-model="task.description" />
  <button @click="createTask">Criar</button>
</template>

<script>
import { useTaskStore } from '../stores/taskStore';

export default {
  data() {
    return {
      task: {
        id: '',
        name: '',
        status: '',
        description: ''
      }
    };
  },
  methods: {
    createTask() {
      const taskStore = useTaskStore();
      // Gerar um ID único para a tarefa
      this.task.id = Date.now().toString();
      // Adicionar a tarefa à store
      taskStore.addTask({ ...this.task });
      // Redirecionar para a página de detalhes da tarefa recém-criada
      this.$router.push(`/tasks/${this.task.id}`);
      // Limpar o formulário
      this.task.name = '';
      this.task.status = '';
      this.task.description = '';
      console.log('Tarefa criada:', taskStore.tasks);
    }
  }
};
</script>