import {createRouter, createWebHistory} from 'vue-router'
import AuthPage from "../pages/AuthPage.vue";
import HomePage from "../pages/HomePage.vue";
import {useUserStore} from "../stores/user";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/auth',
            name: 'auth',
            component: AuthPage
        },
        {
            path: '/',
            name: 'home',
            component: HomePage
        },

    ]
});




router.beforeEach((to, from, next) => {
    const store = useUserStore();
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/auth'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = store.getUserData;

    if (authRequired && !loggedIn) {
        return next('/auth');
    }

    next();
})

export default router
