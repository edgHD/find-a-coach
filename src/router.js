// Import necessary modules from Vue Router
import { createRouter, createWebHistory } from "vue-router";

import TheCoaches from './pages/coaches/TheCoaches.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import ContactCoach from './pages/coaches/ContactCoach.vue';
import RegisterCoach from './pages/requests/RegisterCoach.vue';
import ViewRequests from './pages/requests/ViewRequests.vue';
import NotFound from './pages/NotFound.vue';

// Create a router instance with routes and configurations
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: "/coaches", component: TheCoaches },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      children: [{ path: "contact", component: ContactCoach }],
    },
    { path: "/register", component: RegisterCoach },
    { path: "/requests", component: ViewRequests },
    { path: '/:notFound(.*)', component: NotFound },
  ]
});

export default router; // Export the router instance for use in the application
