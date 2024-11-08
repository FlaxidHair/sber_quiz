<script setup></script>

<template>
  <div class="wrapper">
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <p class="footer__title">Подготовлено совместно с брендом</p>
      <h2 class="footer__subtitle"><img src="/konda.svg" alt="Konda" />Konda</h2>
    </footer>
  </div>
</template>

<style lang="scss">
@import './assets/block/footer.scss';
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    flex: 1;
  }
}
</style>
