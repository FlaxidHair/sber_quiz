<template>
  <div class="main">
    <div class="main-text">
      <h1 class="main-text__title">мегамаркет</h1>
      <p class="main-text__subtitle">
        Какие кроссовки <br />
        тебе подходят?
      </p>
    </div>

    <div class="main-sneackers">
      <img src="/start_blue.webp" class="main-sneackers__image" alt="Sneacker" />
      <img src="/start_red.webp" class="main-sneackers__image" alt="Sneacker" />
      <img src="/start_blue_orange.webp" class="main-sneackers__image" alt="Sneacker" />
    </div>
    <router-link to="/Quiz"><button class="main-button-start">Пройти тест</button></router-link>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import '@/assets/components/StartPage.scss';
</style>
