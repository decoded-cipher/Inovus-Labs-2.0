import Vue from 'vue'
import VueRouter from "vue-router";

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'

import Overview from '../components/Overview.vue'
import Profile from '../components/Profile.vue'
import IoT from '../components/IoT.vue'

import {
    fb
} from '../firebase'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/admin',
            name: 'Admin',
            meta: {
                requiresAuth: true
            },
            component: Admin,
            children: [{
                    path: 'overview',
                    name: 'Overview',
                    component: Overview
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: Profile
                },
                {
                    path: 'iot',
                    name: 'IoT',
                    component: IoT
                }
            ]
        },
    ],
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    var requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    var currentUser = fb.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;