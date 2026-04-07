<template>
  <section class="hero">
    <div class="hero-background">
      <div class="hero-pattern"></div>
      <div class="hero-glow"></div>
    </div>
    
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon" aria-hidden="true">🔥</span>
          <span class="badge-text">正宗淄博味道</span>
        </div>
        
        <h1 class="hero-title">
          <span class="title-main">淄博烧烤</span>
          <span class="title-accent">灵魂烧烤，人间烟火</span>
        </h1>
        
        <p class="hero-description">
          小火炉、三件套、天选之子——淄博烧烤三大灵魂秘技，
          <br>每一串烧烤都承载着淄博人的热情与匠心，传承千年的烧烤文化在炭火中绽放新的生命力
        </p>
        
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">1000+</span>
            <span class="stat-label">每日服务</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">特色品种</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">20年</span>
            <span class="stat-label">匠心传承</span>
          </div>
        </div>
        
        <div class="hero-actions">
          <button class="btn btn-primary" @click="navigateToMenu">
            <span class="btn-text">立即品尝</span>
            <span class="btn-icon" aria-hidden="true">🍢</span>
          </button>
          <button class="btn btn-secondary" @click="navigateToCulture">
            <span class="btn-text">文化故事</span>
            <span class="btn-icon" aria-hidden="true">📖</span>
          </button>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="visual-main">
          <div class="bbq-scene">
            <div class="bbq-grill" aria-hidden="true">🔥</div>
            <div class="bbq-smoke"></div>
            <div class="bbq-items">
              <span class="bbq-item" aria-hidden="true">🍢</span>
              <span class="bbq-item" aria-hidden="true">🥩</span>
              <span class="bbq-item" aria-hidden="true">🌶️</span>
            </div>
          </div>
        </div>
        
        <div class="visual-decorations">
          <div class="decoration-circle decoration-1"></div>
          <div class="decoration-circle decoration-2"></div>
          <div class="decoration-circle decoration-3"></div>
        </div>
      </div>
    </div>
    
    <div class="hero-scroll-indicator">
      <div class="scroll-arrow" aria-hidden="true">↓</div>
      <span class="scroll-text">探索更多</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 导航到菜单页面
const navigateToMenu = () => {
  router.push('/menu')
}

// 导航到文化页面
const navigateToCulture = () => {
  router.push('/culture')
}
</script>

<style scoped>
@import '../assets/styles/components/hero-section.css';
</style>
