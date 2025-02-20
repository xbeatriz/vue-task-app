import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    authenticated: false,
    tasks: JSON.parse(localStorage.getItem('tasks')) || [
      {
        id: 1,
        name: 'Sensor de Temperatura',
        status: 'online',
        description: 'Mede a temperatura ambiente.',
      },
      {
        id: 2,
        name: 'Câmara de Segurança',
        status: 'offline',
        description: 'Monitoriza o ambiente.',
      },
      {
        id: 3,
        name: 'Lâmpada Inteligente',
        status: 'online',
        description: 'Lâmpada controlada remotamente.',
      },
    ],
  }),
  actions: {
    login(username, password) {
      if (username === 'samurai' && password === 'PW1') {
        this.authenticated = true;
        localStorage.setItem('authenticated', true);
        return true;
      }
      return false;
    },
    logout() {
      this.authenticated = false;
      localStorage.removeItem('authenticated');
    },
    updateTasks(tasks) {
      this.tasks = tasks;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    addTask(task) {
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
  },
});
