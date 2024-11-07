<script setup></script>

<template>
  <div class="wrapper">
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <p class="footer__title">Подготовлено совместно с брендом</p>
      <p class="footer__subtitle"><img src="/konda.svg" alt="Konda" />Konda</p>
    </footer>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    flex: 1;
  }

  .footer {
    padding: 20px;
    text-align: center;
  }
}
</style>
