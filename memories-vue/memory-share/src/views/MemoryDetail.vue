<script setup>
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { useMemoryStore } from '../store/memoryStore.js'
import { formatDate } from '../utils/formatDate.js'

const route = useRoute()
const memoryStore = useMemoryStore()
const { isLoading, error } = storeToRefs(memoryStore)

const memoryId = computed(() => route.params.id)
const memory = computed(() => memoryStore.getMemoryById(memoryId.value))

onMounted(async () => {
  if (memoryStore.memories.length === 0) {
    await memoryStore.loadMemories()
  }
})
</script>

<template>
  <section>
    <div v-if="isLoading" class="card">Đang tải...</div>
    <div v-else-if="error" class="card">Lỗi: {{ error }}</div>

    <article v-else-if="memory" class="card">
      <h1>{{ memory.title }}</h1>
      <div class="muted">{{ formatDate(memory.date) }}</div>
      <img v-if="memory.imageUrl" class="cover" :src="memory.imageUrl" :alt="memory.title" loading="lazy" />
      <p class="content">{{ memory.content }}</p>
      <RouterLink class="btn" to="/memories">← Quay lại</RouterLink>
    </article>

    <div v-else class="card">
      Không tìm thấy kỷ niệm.
      <div style="margin-top: 12px">
        <RouterLink class="btn" to="/memories">← Quay lại</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin: 0 0 6px;
}

.content {
  margin: 12px 0 16px;
  line-height: 1.6;
}

.cover {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
  border: 1px solid rgba(232, 236, 255, 0.12);
  margin: 14px 0 8px;
}
</style>
