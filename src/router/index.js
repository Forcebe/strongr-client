import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Routines from '../views/Routines.vue'
import Workouts from '../views/Workouts.vue'
import Exercises from '../views/Exercises.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/routines',
    name: 'Routines',
    component: Routines
  },
  {
    path: '/workouts',
    name: 'Workouts',
    component: Workouts
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: Exercises
  },
  {
    path: '/refresh',
    redirect: '/routines',
    name: 'Refresh'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( async (to, from, next)  => {
  if (to.name !== 'Home') {
    if (!await isAuthenticated()) {
      next({ name: 'Home'});
    } else {
      next();
    }
  } else {
    next();
  }
})

 const isAuthenticated = async function () {
   const response = await axios.get('http://localhost:3001/logged_in',
   {withCredentials: true})


     if (response.data.logged_in) {
       return true
     } else {
       return false
     }
 }

export default router
