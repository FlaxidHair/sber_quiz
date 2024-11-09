<template>
  <div class="wrapper">
    <div class="wrapper-inner" @click="store.isModalWindow = false"></div>
    <div class="card">
      <img src="/cross.webp" class="exit" @click="store.isModalWindow = false" alt="Exit" />
      <div class="card__text">
        <Transition>
          <p class="card__text-title" v-if="copiedText">Ваш промокод:</p>
        </Transition>
        <div class="card__text-promo" :class="{ copied: copiedText }">
          <h2 ref="textToCopy" @click="copyText" class="promocode">
            <span class="promocode-wrapper"></span>КРУТОКОНДА
          </h2>
        </div>
        <p class="card__text-annotation">
          Получите скидку <span class="rub">2000</span> рублей <br />
          при заказе от <span class="rub">6000</span> рублей
        </p>
      </div>
      <button class="card__rules-btn">Правила применения промокода</button>
      <Transition>
        <span class="alert" v-if="copiedText">Промокод скопирован</span>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/stores/store'

const store = useStore()

const textToCopy = ref(null)
const copiedText = ref('')

async function copyText() {
  try {
    copiedText.value = textToCopy.value.innerText
    await navigator.clipboard.writeText(copiedText.value)
  } catch (err) {
    alert('Ошибка при копировании текста: ', err)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/components/ModalWindow';
</style>
