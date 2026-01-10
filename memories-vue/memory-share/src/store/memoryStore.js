import { defineStore } from 'pinia'
import { getMemories } from '../services/memoryService.js'

export const useMemoryStore = defineStore('memory', {
  state: () => ({
    memories: [],
    isLoading: false,
    error: null
  }),
  actions: {
    async loadMemories() {
      if (this.isLoading) return

      this.isLoading = true
      this.error = null

      try {
        this.memories = await getMemories()
      } catch (err) {
        this.error = err instanceof Error ? err.message : String(err)
      } finally {
        this.isLoading = false
      }
    },
    getMemoryById(id) {
      return this.memories.find((m) => String(m.id) === String(id))
    }
  }
})
