import Vue from 'vue'
import VueRouter from 'vue-router'
import Audit from '../views/AuditView'
import Settings from '../views/SettingsView'
import Users from '../views/UsersView'
import Loans from '../views/LoansView'
import Books from '../views/BooksView'
import EditProfile from '../views/EditProfileView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/audit',
    name: 'AuditView',
    component: Audit
  },
  {
    path: '/settings',
    name: 'SettingsView',
    component: Settings
  },
  {
    path: '/users',
    name: 'UsersView',
    component: Users
  },
  {
    path: '/loans',
    name: 'LoansView',
    component: Loans
  },
  {
    path: '/books',
    name: 'BooksView',
    component: Books
  },
  {
    path: '/edit-profile',
    name: 'EditProfileView',
    component: EditProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
