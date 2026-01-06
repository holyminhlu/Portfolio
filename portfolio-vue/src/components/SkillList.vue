<template>
  <div class="badges" aria-label="Skill list">
    <span v-for="skill in skills" :key="skill" class="badge">{{ skill }}</span>
  </div>
</template>

<script setup>
defineProps({
  skills: { type: Array, default: () => [] }
})
</script>