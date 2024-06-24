import { createRouter, createWebHistory } from 'vue-router';
import Project from '../page/ProjectPage.vue';
import Home from '../page/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/projects',
        name: 'projects',
        component: Project,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
