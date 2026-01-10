<script setup>
import MemoryCard from './MemoryCard.vue'

defineProps({
  memories: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="grid">
    <MemoryCard v-for="m in memories" :key="m.id" :memory="m" />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}

.grid :deep(.card) {
  grid-column: span 12;
}

@media (min-width: 720px) {
  .grid :deep(.card) {
    grid-column: span 6;
  }
}
</style>
