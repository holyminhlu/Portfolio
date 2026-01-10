<script setup>
import AppHeader from './components/common/AppHeader.vue'
import AppFooter from './components/common/AppFooter.vue'
import BackToTop from './components/common/BackToTop.vue'
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="container">
      <RouterView />
    </main>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
