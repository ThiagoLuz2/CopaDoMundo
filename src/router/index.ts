import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabsPage from '../views/TabsPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ResetPasswordPage from '@/views/ResetPasswordPage.vue'
import AlbumPage from '@/views/AlbumPage.vue'
import CollectionPage from '@/views/CollectionPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/reset-password',
    component: ResetPasswordPage,
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',
      },
      {
        path: 'tab1',
        component: AlbumPage,
      },
      {
        path: 'tab2',
        component: CollectionPage,
      },
      {
        path: 'tab3',
        component: ProfilePage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
