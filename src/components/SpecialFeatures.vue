<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">淄博烧烤三大特色</h2>
      <div class="features-grid grid grid-3">
        <div class="feature-card card">
          <div class="feature-icon">🔥</div>
          <h3 class="feature-title">炭火烧烤</h3>
          <p class="feature-description">传统炭火烧制，锁住食材原香，每一口都是满满的烟火气息</p>
        </div>
        <div class="feature-card card">
          <div class="feature-icon">🥬</div>
          <h3 class="feature-title">小饼卷肉</h3>
          <p class="feature-description">独特的小饼卷肉吃法，蘸料丰富，口感层次分明，回味无穷</p>
        </div>
        <div class="feature-card card">
          <div class="feature-icon">❤️</div>
          <h3 class="feature-title">人文关怀</h3>
          <p class="feature-description">热情好客的淄博人，让每一位客人都能感受到家的温暖</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 特色功能组件，无需额外逻辑
</script>

<style scoped>
@import '../assets/styles/common.css';

/* 特色介绍区域 */
.features {
  padding: 8rem 0;
  background: #fafafa;
  position: relative;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255,69,0,0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,107,53,0.05) 0%, transparent 50%);
  pointer-events: none;
}

.features-grid {
  position: relative;
  z-index: 2;
}

.feature-card {
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,69,0,0.1);
  position: relative;
  overflow: hidden;
}

.feature-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,69,0,0.02) 0%, rgba(255,107,53,0.02) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover::after {
  opacity: 1;
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  animation: pulse 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 15px rgba(255,69,0,0.2));
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  animation: bounce 0.6s ease-in-out;
}

.feature-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  position: relative;
}

.feature-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(135deg, #ff4500, #ff6b35);
  border-radius: 2px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .feature-title::after {
  opacity: 1;
}

.feature-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

/* 动画效果 */
.feature-card {
  animation: fadeInUp 0.8s ease-out;
}

.feature-card:nth-child(1) {
  animation-delay: 0.1s;
}

.feature-card:nth-child(2) {
  animation-delay: 0.2s;
}

.feature-card:nth-child(3) {
  animation-delay: 0.3s;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .features {
    padding: 6rem 0;
  }
  
  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .feature-title {
    font-size: 1.5rem;
  }
  
  .feature-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .features {
    padding: 4rem 0;
  }
  
  .feature-icon {
    font-size: 2.5rem;
  }
  
  .feature-title {
    font-size: 1.3rem;
  }
  
  .feature-description {
    font-size: 0.9rem;
  }
}

/* 特殊动画 */
@keyframes featureFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.feature-card:hover {
  animation: featureFloat 2s ease-in-out infinite;
}
</style>