import Vue from 'vue'
import Router from 'vue-router'

import Admin from './Admin'
import Home from './Home.vue'

import Login from './components/auth/Login.vue'
import RolesList from './components/roles/List.vue'
import UsersList from './components/users/List.vue'
import Role from './components/roles/Role.vue'
import EventsList from './components/events/List.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login,
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/roles',
          name: 'roleslist',
          component: RolesList,
        },
        {
          path: '/role/create',
          name: 'RoleCreate',
          component: Role,
        },
        {
          path: '/role/:id',
          name: 'RoleEdit',
          component: Role,
        },
        {
          path: '/users',
          name: 'userslist',
          component: UsersList,
        },
        {
          path: '/events',
          name: 'Eventslist',
          component: EventsList,
        },
      ]
      
    }
  ]
})
