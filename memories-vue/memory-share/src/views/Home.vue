<template>
  <section class="hero card">
    <h1>Memory Share</h1>
    <p class="muted">
      Một app nhỏ để lưu và chia sẻ kỷ niệm. Đây là scaffold mẫu — bạn có thể thay dữ liệu và UI sau.
    </p>
    <div class="actions">
      <RouterLink class="btn" to="/memories">Xem Memories</RouterLink>
      <RouterLink class="btn" to="/about">Giới thiệu</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero h1 {
  margin: 0 0 8px;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 14px;
}
</style>
