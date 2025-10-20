<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>

<style>
/* 导入全局样式 */
@import './styles/global.css';
</style>
