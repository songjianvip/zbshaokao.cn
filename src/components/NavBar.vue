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
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">首页</router-link>
        <router-link to="/menu" class="nav-link" @click="closeMenu">菜单</router-link>
        <router-link to="/culture" class="nav-link" @click="closeMenu">文化</router-link>
        <a href="#contact" class="nav-link" @click="closeMenu">联系我们</a>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="nav-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: var(--transition-normal);
  border-bottom: 1px solid var(--border-light);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-navbar);
}

.nav-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--navbar-height);
}

/* Logo样式 */
.nav-logo {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: bold;
  font-size: var(--font-size-xl);
  transition: var(--transition-normal);
}

.logo-link:hover {
  color: var(--primary-color);
}

.logo-icon {
  font-size: var(--font-size-2xl);
  margin-right: var(--spacing-xs);
}

.logo-text {
  font-family: 'Microsoft YaHei', sans-serif;
}

/* 导航菜单样式 */
.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 25px;
  transition: var(--transition-normal);
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
  background: var(--primary-light);
}

.nav-link.router-link-active {
  color: var(--primary-color);
  background: var(--primary-light);
}

/* 移动端菜单按钮 */
.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
}

.bar {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  margin: 3px 0;
  transition: var(--transition-normal);
  border-radius: 2px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: var(--navbar-height);
    left: -100%;
    width: 100%;
    height: calc(100vh - var(--navbar-height));
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: var(--spacing-lg);
    transition: var(--transition-normal);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-link {
    font-size: var(--font-size-lg);
    padding: var(--spacing-md) var(--spacing-lg);
    width: 200px;
    text-align: center;
    margin: var(--spacing-xs) 0;
  }

  /* 汉堡菜单动画 */
  .nav-toggle.active .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}
</style>