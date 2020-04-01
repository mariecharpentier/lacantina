import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import List from './components/List.vue';
import Recipe from './components/Recipe.vue';
import Add from './components/Add.vue';
import Edit from './components/Edit.vue';


const routes = [
   { path: '/', component: Home },
   { path: '/recipes', component: List },
   { path: '/recipe/:id', component: Recipe },
   { path: '/add', component: Add },
   { path: '/edit:id', component: Edit }
];

const router = new VueRouter({
   routes
});

export default router;