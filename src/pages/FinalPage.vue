<template>
  <div class="final">
    <h2 class="final__title">мегамаркет</h2>
    <div class="final__text">
      <h2 class="final__text-title">Вам подойдут кроссовки {{ cardTitle }}</h2>
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
      <div>
        <p class="card__title">{{ cardTitle }}</p>
        <p class="card__subtitle">{{ cardSubtitle }}</p>
      </div>
    </div>
    <p class="final__annotation">Кроссовки Konda представлены эксклюзивно на Мегамаркете</p>
    <div class="final__button-groups">
      <button class="retry">Пройти тест заново</button>
      <button class="promo">Получить промокод</button>
      <button class="site">Перейти на сайт</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/stores/store'
import { ref } from 'vue'
const store = useStore()

const cardTitle = ref('Konda 400')
const cardSubtitle = ref('BLACK/WHITE')
const cardImage = ref('/sneackers/400/black.webp')

function showSneackers() {
  const finalAnswers = [0, 0, 0]
  store.answers.forEach((el) => {
    finalAnswers[el]++
  })
  const maxIndex = Math.max(...finalAnswers)
  const indices = finalAnswers.reduce((acc, value, index) => {
    if (value === maxIndex) {
      acc.push(index)
    }
    return acc
  }, [])
  return indices
}
showSneackers()
</script>

<style lang="scss" scoped>
@import '../assets/components/FinalPage.scss';
</style>
