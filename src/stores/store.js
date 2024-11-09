// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  const isModalWindow = ref(false)

  const answers = ref([])

  function showSneackers() {
    const finalAnswers = [0, 0, 0]
    answers.value.forEach((el) => {
      finalAnswers[el]++
    })
    const maxIndex = Math.max(...finalAnswers)
    const indices = finalAnswers.reduce((acc, value, index) => {
      if (value === maxIndex) {
        acc.push(index)
      }
      return acc
    }, [])
    answers.value = indices
  }

  return { answers, showSneackers, isModalWindow }
})
