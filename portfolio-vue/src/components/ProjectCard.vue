<template>
  <article class="card project-card">
    <div class="project-head">
      <h3 class="card-title project-title">{{ project.name }}</h3>
      <div class="project-links">
        <a v-if="project.github" class="link" :href="project.github" target="_blank" rel="noreferrer">GitHub</a>
        <a v-if="project.demo" class="link" :href="project.demo" target="_blank" rel="noreferrer">Demo</a>
      </div>
    </div>

    <p class="muted">{{ project.description }}</p>

    <div v-if="project.tech?.length" class="project-tech">
      <span v-for="t in project.tech" :key="t" class="badge">{{ t }}</span>
    </div>

    <ul v-if="project.highlights?.length" class="bullets">
      <li v-for="h in project.highlights" :key="h">{{ h }}</li>
    </ul>
  </article>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>