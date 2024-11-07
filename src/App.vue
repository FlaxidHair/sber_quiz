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

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    flex: 1;
  }

  .footer {
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    padding-bottom: 30px;

    &__title {
      font-size: 16px;
      line-height: 19.2px;
    }

    &__subtitle {
      display: flex;
      column-gap: 10px;
      justify-content: center;
      font-size: 24px;
    }
  }
}

@media (max-width: 3840px) {
  .footer {
    &__title {
      font-size: 305px;
      line-height: 19.2px;
    }

    &__subtitle {
      display: flex;
      column-gap: 10px;
      justify-content: center;
      font-size: 45px;
    }
  }
}

@media (max-width: 2560px) {
}

@media (max-width: 1600px) {
}

@media (max-width: 744px) {
}

@media (max-width: 365px) {
}
</style>
