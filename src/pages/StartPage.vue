<template>
  <div class="main">
    <div class="main-title">
      <img src="/Logo.svg" alt="Logo" class="main-title__title" />
      <p class="main-title__subtitle">
        Какие кроссовки <br />
        тебе подходят?
      </p>
    </div>

    <div class="main-images">
      <img src="/start_blue.webp" class="main-images__image" alt="Sneacker" />
      <img src="/start_red.webp" class="main-images__image" alt="Sneacker" />
      <img src="/start_blue_orange.webp" class="main-images__image" alt="Sneacker" />
    </div>
    <router-link to="/Quiz"><button class="main-button-start">Пройти тест</button></router-link>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import '@/assets/components/StartPage.scss';
</style>
