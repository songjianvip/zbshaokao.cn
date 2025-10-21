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
@import '../assets/styles/common.css';

/* 文化故事区域 */
.culture {
  padding: 8rem 0;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  position: relative;
}

.culture::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(255,69,0,0.03) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(255,107,53,0.03) 0%, transparent 50%);
  pointer-events: none;
}

.culture-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.culture-text {
  animation: slideInLeft 1s ease-out;
}

.culture-title {
  font-size: 3rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 2rem;
  position: relative;
}

.culture-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #ff4500, #ff6b35);
  border-radius: 2px;
}

.culture-paragraphs {
  margin-bottom: 2.5rem;
}

.culture-paragraph {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1rem;
}

.culture-paragraph::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 4px;
  height: 1.5rem;
  background: linear-gradient(135deg, #ff4500, #ff6b35);
  border-radius: 2px;
}

.culture-paragraph:last-child {
  margin-bottom: 0;
}

.culture-highlights {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255,69,0,0.1);
}

.highlight-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255,69,0,0.15);
}

.highlight-icon {
  font-size: 1.2rem;
  animation: pulse 2s ease-in-out infinite;
}

.highlight-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.5px;
}

/* 图片区域 */
.culture-image {
  animation: slideInRight 1s ease-out;
}

.image-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.placeholder-image {
  font-size: 12rem;
  color: #ff4500;
  filter: drop-shadow(0 10px 30px rgba(255,69,0,0.3));
  animation: float 3s ease-in-out infinite;
}

.image-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.decoration-element {
  position: absolute;
  font-size: 2rem;
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 4px 15px rgba(255,69,0,0.2));
}

.decoration-1 {
  top: 20%;
  right: 20%;
  animation-delay: 0.5s;
}

.decoration-2 {
  bottom: 30%;
  left: 15%;
  animation-delay: 1s;
}

.decoration-3 {
  top: 60%;
  right: 10%;
  animation-delay: 1.5s;
}

/* 动画效果 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .culture-content {
    gap: 4rem;
  }
  
  .culture-title {
    font-size: 2.5rem;
  }
  
  .placeholder-image {
    font-size: 10rem;
  }
}

@media (max-width: 768px) {
  .culture {
    padding: 6rem 0;
  }
  
  .culture-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .culture-title {
    font-size: 2rem;
  }
  
  .culture-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .culture-paragraph {
    font-size: 1.1rem;
    padding-left: 0;
  }
  
  .culture-paragraph::before {
    display: none;
  }
  
  .culture-highlights {
    justify-content: center;
    gap: 1rem;
  }
  
  .image-container {
    height: 300px;
  }
  
  .placeholder-image {
    font-size: 8rem;
  }
  
  .decoration-element {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .culture {
    padding: 4rem 0;
  }
  
  .culture-title {
    font-size: 1.8rem;
  }
  
  .culture-paragraph {
    font-size: 1rem;
  }
  
  .culture-highlights {
    flex-direction: column;
    align-items: center;
  }
  
  .highlight-item {
    padding: 0.8rem 1.2rem;
  }
  
  .highlight-text {
    font-size: 0.8rem;
  }
  
  .image-container {
    height: 250px;
  }
  
  .placeholder-image {
    font-size: 6rem;
  }
  
  .decoration-element {
    font-size: 1.2rem;
  }
}

/* 特殊效果 */
.culture-text {
  position: relative;
}

.culture-text::before {
  content: '';
  position: absolute;
  top: -2rem;
  left: -2rem;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255,69,0,0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

/* 悬浮效果增强 */
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255,69,0,0.3);
}
</style>