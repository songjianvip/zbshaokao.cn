<template>
  <section class="not-found">
    <div class="container not-found-inner">
      <p class="not-found-code">404</p>
      <h1>页面未找到</h1>
      <p>当前链接可能已失效或已迁移，返回首页继续浏览淄博烧烤内容。</p>
      <router-link class="btn btn-primary" to="/">返回首页</router-link>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  min-height: calc(100svh - var(--navbar-height));
  display: flex;
  align-items: center;
  padding: calc(var(--navbar-height) + var(--spacing-2xl)) 0 var(--spacing-2xl);
}

.not-found-inner {
  text-align: center;
}

.not-found-code {
  font-size: clamp(4rem, 10vw, 7rem);
  line-height: 1;
  font-weight: 800;
  color: var(--primary-color);
}
</style>
