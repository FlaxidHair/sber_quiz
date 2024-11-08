<template>
  <div class="quiz">
    <h2 class="quiz__title">мегамаркет</h2>
    <div class="game">
      <h2 class="game__index">01</h2>
      <h3 class="game__quiestion">
        как вы обычно ставите ногу во время приземления на поверхность?
      </h3>

      <div class="game__cards">
        <div class="card">
          <span class="card__index">01.</span>
          <p class="card__text">Приземляюсь на носок</p>
        </div>
        <div class="card">
          <span class="card__index">01.</span>
          <p class="card__text">Приземляюсь на носок</p>
        </div>
        <div class="card">
          <span class="card__index">01.</span>
          <p class="card__text">Приземляюсь на носок</p>
        </div>
      </div>
      <div class="pagination">
        <button class="pagination__prev">Назад</button>
        <div class="pagination__items">
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
          <div class="pagination__items-circle"></div>
        </div>
        <button class="pagination__next">Далее</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/components/QuizPage';
</style>
