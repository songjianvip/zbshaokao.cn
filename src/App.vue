<script setup lang="ts">
import Header from './template/header.vue'
import Footer from './template/footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
/* 导入全局样式 */
@import './assets/styles/global.css';
@import './assets/styles/common.css';
/* 导入组件样式 */
@import './assets/styles/components/app.css';
</style>
