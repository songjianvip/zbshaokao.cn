<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="copyright-footer">
      <div class="copyright-content">
        <p class="copyright-text">© 2023-2025 淄博烧烤网. 保留所有权利.</p>
        <p class="slogan-text">让世界品味淄博，让淄博走向世界</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* 导入全局样式 */
@import './styles/global.css';

/* 底部版权区域样式 */
.copyright-footer {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
  padding: var(--spacing-lg) 0;
  margin-top: auto;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.copyright-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.copyright-text {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-xs) 0;
  opacity: 0.9;
  font-weight: 500;
}

.slogan-text {
  font-size: var(--font-size-base);
  margin: 0;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
}

/* 确保页面布局正确 */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
