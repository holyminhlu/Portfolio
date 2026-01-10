<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import MemoryList from '../components/memory/MemoryList.vue'
import { useMemoryStore } from '../store/memoryStore.js'

const memoryStore = useMemoryStore()
const { memories, isLoading, error } = storeToRefs(memoryStore)

onMounted(() => {
  memoryStore.loadMemories()
})
</script>

<template>
  <section>
    <h1>Memories</h1>

    <div v-if="isLoading" class="card">Đang tải...</div>
    <div v-else-if="error" class="card">Lỗi: {{ error }}</div>
    <div v-else-if="memories.length === 0" class="card">Chưa có kỷ niệm nào.</div>
    <MemoryList v-else :memories="memories" />
  </section>
</template>

<style scoped>
h1 {
  margin: 0 0 14px;
}
</style>
