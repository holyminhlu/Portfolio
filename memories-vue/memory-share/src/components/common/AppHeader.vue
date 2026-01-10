<template>
  <header class="header">
    <div class="container inner">
      <RouterLink class="brand" to="/">Memory Share</RouterLink>

      <nav class="nav">
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/memories">Memories</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(11, 16, 32, 0.65);
  border-bottom: 1px solid rgba(232, 236, 255, 0.12);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  font-weight: 700;
  letter-spacing: 0.2px;
}

.nav {
  display: flex;
  gap: 12px;
}

.link {
  padding: 8px 10px;
  border-radius: 10px;
  color: rgba(232, 236, 255, 0.8);
}

.link.router-link-active {
  color: #e8ecff;
  border: 1px solid rgba(232, 236, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
}
</style>
