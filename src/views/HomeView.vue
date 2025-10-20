<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-pattern"></div>
        <div class="hero-glow"></div>
      </div>
      
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">🔥</span>
            <span class="badge-text">正宗淄博味道</span>
          </div>
          
          <h1 class="hero-title">
            <span class="title-main">淄博烧烤</span>
            <span class="title-accent">灵魂烧烤，人间烟火</span>
          </h1>
          
          <p class="hero-description">
            在这里，每一串烧烤都承载着淄博人的热情与匠心，
            <br>传承千年的烧烤文化在炭火中绽放新的生命力
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
              <span class="btn-icon">🍢</span>
            </button>
            <button class="btn btn-secondary" @click="navigateToCulture">
              <span class="btn-text">文化故事</span>
              <span class="btn-icon">📖</span>
            </button>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="visual-main">
            <div class="bbq-scene">
              <div class="bbq-grill">🔥</div>
              <div class="bbq-smoke"></div>
              <div class="bbq-items">
                <span class="bbq-item">🍢</span>
                <span class="bbq-item">🥩</span>
                <span class="bbq-item">🌶️</span>
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
        <div class="scroll-arrow">↓</div>
        <span class="scroll-text">探索更多</span>
      </div>
    </section>

    <!-- 特色介绍 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">淄博烧烤三大特色</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔥</div>
            <h3>炭火烧烤</h3>
            <p>传统炭火烧制，锁住食材原香，每一口都是满满的烟火气息</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🥬</div>
            <h3>小饼卷肉</h3>
            <p>独特的小饼卷肉吃法，蘸料丰富，口感层次分明，回味无穷</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">❤️</div>
            <h3>人文关怀</h3>
            <p>热情好客的淄博人，让每一位客人都能感受到家的温暖</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门推荐 -->
    <section class="popular">
      <div class="container">
        <h2 class="section-title">热门推荐</h2>
        <div class="popular-grid">
          <div class="popular-item">
            <div class="item-image">🥩</div>
            <h4>五花肉</h4>
            <p>肥瘦相间，香嫩多汁</p>
          </div>
          <div class="popular-item">
            <div class="item-image">🍖</div>
            <h4>羊肉串</h4>
            <p>鲜嫩羊肉，孜然飘香</p>
          </div>
          <div class="popular-item">
            <div class="item-image">🌶️</div>
            <h4>烤韭菜</h4>
            <p>清香脆嫩，回味甘甜</p>
          </div>
          <div class="popular-item">
            <div class="item-image">🥒</div>
            <h4>烤茄子</h4>
            <p>软糯香甜，蒜香浓郁</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 文化故事 -->
    <section class="culture">
      <div class="container">
        <div class="culture-content">
          <div class="culture-text">
            <h2>淄博烧烤的文化故事</h2>
            <p>淄博烧烤不仅仅是一种美食，更是一种文化的传承。从街头巷尾的小摊到现代化的烧烤店，每一处都承载着淄博人对美食的执着和对生活的热爱。</p>
            <p>这里的烧烤师傅们用心烤制每一串食材，用热情服务每一位客人，让远道而来的朋友们都能感受到淄博的温暖和真诚。</p>
            <button class="btn btn-outline" @click="navigateToCulture">
              <span class="btn-text">了解更多</span>
              <span class="btn-icon">📖</span>
            </button>
          </div>
          <div class="culture-image">
            <div class="placeholder-image">🏮</div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
@import '../assets/styles/components/home.css';
</style>