<template>
  <section class="culture">
    <div class="container">
      <div class="culture-content">
        <div class="culture-text">
          <h2 class="culture-title">淄博烧烤的文化故事</h2>
          <div class="culture-paragraphs">
            <p class="culture-paragraph">
              淄博烧烤不仅仅是一种美食，更是一种文化的传承。从街头巷尾的小摊到现代化的烧烤店，每一处都承载着淄博人对美食的执着和对生活的热爱。
            </p>
            <p class="culture-paragraph">
              这里的烧烤师傅们用心烤制每一串食材，用热情服务每一位客人，让远道而来的朋友们都能感受到淄博的温暖和真诚。
            </p>
          </div>
          <div class="culture-highlights">
            <div class="highlight-item">
              <span class="highlight-icon">🏮</span>
              <span class="highlight-text">千年传承</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">👨‍🍳</span>
              <span class="highlight-text">匠心工艺</span>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🤝</span>
              <span class="highlight-text">热情好客</span>
            </div>
          </div>
          <button class="btn btn-outline" @click="navigateToCulture">
            <span class="btn-text">了解更多</span>
            <span class="btn-icon">📖</span>
          </button>
        </div>
        <div class="culture-image">
          <div class="image-container">
            <div class="placeholder-image">🏮</div>
            <div class="image-decorations">
              <div class="decoration-element decoration-1">🔥</div>
              <div class="decoration-element decoration-2">🍢</div>
              <div class="decoration-element decoration-3">⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 导航到文化页面
const navigateToCulture = () => {
  router.push('/culture')
}
</script>

<style scoped>
@import '../assets/styles/components/culture-story.css';
</style>
