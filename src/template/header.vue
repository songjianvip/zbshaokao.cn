<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <!-- Logo -->
      <div class="nav-logo">
        <router-link to="/" class="logo-link">
          <span class="logo-icon">🍢</span>
          <span class="logo-text">淄博烧烤</span>
        </router-link>
      </div>

      <!-- 导航菜单 -->
      <div v-if="isMenuOpen" class="nav-overlay" @click="closeMenu"></div>

      <div id="primary-menu" class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">首页</router-link>
        <router-link :to="{ path: '/', hash: '#news' }" class="nav-link" @click="closeMenu">新闻</router-link>
        <router-link to="/menu" class="nav-link" @click="closeMenu">菜单</router-link>
        <router-link to="/culture" class="nav-link" @click="closeMenu">文化</router-link>
      </div>

      <!-- 移动端菜单按钮 -->
      <button
        class="nav-toggle"
        :class="{ active: isMenuOpen }"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-menu"
        aria-label="切换导航菜单"
        type="button"
        @click="toggleMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

defineOptions({
  name: 'AppHeader'
})

const isScrolled = ref<boolean>(false)
const isMenuOpen = ref<boolean>(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watchEffect(() => {
  document.body.classList.toggle('menu-open', isMenuOpen.value)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.classList.remove('menu-open')
})
</script>

<style scoped>
@import '../assets/styles/components/header.css';
</style>
