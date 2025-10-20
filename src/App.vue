<script setup lang="ts">
import Header from './template/header.vue'
</script>

<template>
  <div id="app">
    <Header />
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
@import './assets/styles/global.css';
/* 导入组件样式 */
@import './assets/styles/components/app.css';
@import './assets/styles/components/footer.css';
</style>
