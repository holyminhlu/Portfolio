<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isVisible = ref(false)

function onScroll() {
  isVisible.value = window.scrollY > 400
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <button v-if="isVisible" class="fab" type="button" @click="backToTop">↑</button>
</template>

<style scoped>
.fab {
  position: fixed;
  right: 18px;
  bottom: 18px;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(232, 236, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: #e8ecff;
  cursor: pointer;
}

.fab:hover {
  border-color: rgba(122, 162, 255, 0.6);
}
</style>
