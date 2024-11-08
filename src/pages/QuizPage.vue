<template>
  <div class="quiz">
    <h2 class="quiz__title">мегамаркет</h2>
    <div class="game" v-if="currentQuestionIndex < Questions.length">
      <h2 class="game__index">{{ `0${Questions[currentQuestionIndex].id}` }}</h2>
      <h3 class="game__quiestion">
        {{ Questions[currentQuestionIndex].question }}
      </h3>

      <div class="game__cards">
        <div
          class="card"
          :class="{ 'pick-item': selectItem === index }"
          @click="pickAnswer(index)"
          v-for="(answer, index) in Questions[currentQuestionIndex].options"
          :key="index"
        >
          <span class="card__index">{{ `0${index + 1}.` }}</span>
          <p class="card__text">{{ answer }}</p>
        </div>
      </div>
      <div class="pagination">
        <button @click="prevQuestion" class="pagination__prev">Назад</button>
        <div class="pagination__items">
          <div
            v-for="question in Questions"
            :key="question.id"
            :class="{
              'active-item': currentQuestionIndex + 1 === question.id,
            }"
            class="pagination__items-circle"
          ></div>
        </div>
        <button @click="nextQuestion" :disabled="selectItem === null" class="pagination__next">
          Далее
        </button>
      </div>
    </div>
  </div>
  <FinalPage></FinalPage>
</template>

<script setup>
import Questions from '../api/Questions.json'
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import router from '@/router/router'
import FinalPage from '@/pages/FinalPage.vue'

const store = useStore()

const currentQuestionIndex = ref(0)

const selectItem = ref(null)

function nextQuestion() {
  store.answers.push(selectItem.value)
  selectItem.value = null
  currentQuestionIndex.value++
  if (currentQuestionIndex.value >= 10) {
    router.push('/Final')
  }
}

function prevQuestion() {
  currentQuestionIndex.value !== 0 ? currentQuestionIndex.value-- : router.push('/')
  store.answers.pop()
}

function pickAnswer(item) {
  selectItem.value = item
}
</script>

<style lang="scss" scoped>
@import '../assets/components/QuizPage';
</style>
