// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {

  const answers = ref([])
  return {answers}
})
