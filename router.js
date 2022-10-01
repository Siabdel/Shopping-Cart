import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home'
import BooksList from './views/BookList'

Vue.use(Router);

const router =  new Router({
    mode : 'history',
    routes : [
        {   'path': '/', 
            'name' : 'Home',
            'component'  : Home,
        },
        {   'path': '/Books', 
            'name' : 'Books',
            'component'  : BooksList,
        },

    ]
});

export default router;