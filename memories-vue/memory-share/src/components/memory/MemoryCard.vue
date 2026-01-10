<script setup>
import { computed } from 'vue'
import { formatDate } from '../../utils/formatDate.js'

const props = defineProps({
  memory: {
    type: Object,
    required: true
  }
})

const dateText = computed(() => formatDate(props.memory.date))
</script>

<template>
  <article class="card">
    <img v-if="memory.imageUrl" class="cover" :src="memory.imageUrl" :alt="memory.title" loading="lazy" />
    <h3 class="title">
      <RouterLink :to="`/memories/${memory.id}`">{{ memory.title }}</RouterLink>
    </h3>
    <div class="muted meta">{{ dateText }}</div>
    <p class="muted excerpt">{{ memory.excerpt }}</p>
    <RouterLink class="btn" :to="`/memories/${memory.id}`">Xem chi tiết</RouterLink>
  </article>
</template>

<style scoped>
.cover {
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(232, 236, 255, 0.12);
  margin-bottom: 12px;
}

.title {
  margin: 0 0 6px;
}

.meta {
  font-size: 14px;
  margin-bottom: 10px;
}

.excerpt {
  margin: 0 0 12px;
}
</style>
