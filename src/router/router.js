import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '@/pages/StartPage.vue'
import QuizPage from '@/pages/QuizPage.vue'
const routes = [
  { path: '/', component: StartPage },
  { path: '/Quiz', component: QuizPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
