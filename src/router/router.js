import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '@/pages/StartPage.vue'
import QuizPage from '@/pages/QuizPage.vue'
import FinalPage from '@/pages/FinalPage.vue'

const routes = [
  { path: '/', component: StartPage },
  { path: '/Quiz', component: QuizPage },
  { path: '/Final', component: FinalPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
