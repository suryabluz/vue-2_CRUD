// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
import AddUser from '../views/AddUser.vue'
import EditUser from '../views/EditUser.vue'
import ViewUser from '../views/ViewUser.vue'
import PageNotFound from '../views/PageNotFound.vue'
import LoginPage from '../views/loginPage.vue'
import SignUp from '../views/SignUp.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/user',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user/view/:id',
    name: 'ViewUser',
    component: ViewUser
  },
  {
    path: '/user/edit/:id',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/user/add',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
