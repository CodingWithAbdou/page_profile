import { createRouter, createWebHistory } from 'vue-router';
import ProjectPage from '../page/ProjectPage.vue';
import HomePage from '../page/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectPage,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
