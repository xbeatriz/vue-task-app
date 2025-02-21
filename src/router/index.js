import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TasksView from '../views/TaskView.vue'
import TasksDetailsView from '@/views/TasksDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/tasks',
      name: 'createTask',
      component: TasksView,
    },
    {
      path: '/tasks/:id',
      name: 'tasksDetails',
      component: TasksDetailsView,
      meta: {
        requiresAuth: true
      }
    }
  ],
})

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authenticated');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router; // ✅ Certifique-se de que esta linha está no final!
