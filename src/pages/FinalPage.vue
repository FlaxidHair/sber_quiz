<template>
  <div class="final">
    <h2 class="final__title">мегамаркет</h2>
    <div class="final__text">
      <h2 class="final__text-title">вам подойдут кроссовки {{ cardTitle }}</h2>
      <p class="final__text-subtitle">
        Кроссовки выполнены из легкой, воздухопроницаемой сетки @Absolute Mesh, позволяющей
        поддерживать комфортную температуру внутри кроссовок.
      </p>
      <p class="final__text-subtitle short">
        Эффективная стелька @EFF с дополнительной амортизацией удерживает стопу в максимально
        собранном состоянии.
      </p>
      <p class="final__text-subtitle">
        Межподошва из высокоэластичной пены @E-TPU обладает повышенной прочностью и устойчива к
        деформации. Усиленная амортизация уменьшает мышечное напряжение на 15%.
      </p>
      <p class="final__text-subtitle">
        Подошва @AST обеспечивает надежное сцепление с поверхностью.
      </p>
    </div>

    <div class="final__card">
      <img class="card__img" :src="cardImage" alt="Sneacker" />
      <div class="final__card-text">
        <p class="card__title">{{ cardTitle }}</p>
        <p class="card__subtitle">{{ cardSubtitle }}</p>
      </div>
    </div>
    <p class="final__annotation">Кроссовки Konda представлены эксклюзивно на Мегамаркете</p>
    <div class="final__button-groups">
      <button class="retry" @click="restart">Пройти тест заново</button>
      <button class="promo">Получить промокод</button>
      <a href="https://megamarket.ru/" target="_blank"
        ><button class="site">Перейти на сайт</button></a
      >
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store'
import { ref, onMounted } from 'vue'
import router from '@/router/router'

const store = useStore()

const cardTitle = ref('')
const cardSubtitle = ref('')
const cardImage = ref('')

function restart() {
  store.answers = []
  
  router.push('/')
}

onMounted(() => {
  store.showSneackers()
  getSneackers()
})

function getSneackers() {
  const sneacker = JSON.parse(localStorage.getItem('sneacker'))
  if (sneacker === 0) {
    cardTitle.value = 'Konda 700'
    cardSubtitle.value = 'BLUE/ORANGE'
    cardImage.value = '/sneackers/700/orange.webp'
  } else if (sneacker === 1) {
    cardTitle.value = 'Konda 400'
    cardSubtitle.value = 'BLACK/WHITE'
    cardImage.value = '/sneackers/400/black.webp'
  } else if (sneacker === 2) {
    cardTitle.value = 'Konda 200'
    cardSubtitle.value = 'BLUE/WHITE'
    cardImage.value = '/sneackers/200/blue.webp'
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/components/FinalPage.scss';
</style>
