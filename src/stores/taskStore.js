import { defineStore } from 'pinia';
/* import { routes } from '@/router/index'; */
import  router  from '@/router';

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
    //?Ação para fazer o delete da task sem precisar estar logado
   /*  deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }, */
    //?Ação para fazer o delete da task com a verificação de estar logado
   /*  deleteTask(taskId) {
      if (!this.authenticated) {
        throw new Error('User not authenticated');
      }
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }, */
    //?Ação para fazer o delete da task com a verificação de estar logado e redirecionar para a rota de login
    deleteTask(taskId) {
      console.log('Router:', router); // Verifica se o router está sendo importado corretamente
      const isAuthenticated = localStorage.getItem('authenticated'); 
if (!isAuthenticated) { 
        alert('Você precisa estar logado para deletar uma tarefa.');
        router.push('/login'); // Redireciona para a rota de login corretamente
        return;
      }
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
  },
});
