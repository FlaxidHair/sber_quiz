// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
 



  const answerCouts = [0,0,0]

  return { answerCouts }
})
