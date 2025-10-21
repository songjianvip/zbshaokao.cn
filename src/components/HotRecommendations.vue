<template>
  <section class="popular">
    <div class="container">
      <h2 class="section-title">热门推荐</h2>
      <div class="popular-grid grid grid-4">
        <div class="popular-item card" v-for="(item, index) in popularItems" :key="index">
          <div class="item-image">{{ item.emoji }}</div>
          <h4 class="item-title">{{ item.name }}</h4>
          <p class="item-description">{{ item.description }}</p>
          <div class="item-rating">
            <span class="rating-stars">⭐⭐⭐⭐⭐</span>
            <span class="rating-text">{{ item.rating }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 热门推荐数据
const popularItems = ref([
  {
    name: '五花肉',
    description: '肥瘦相间，香嫩多汁',
    emoji: '🥩',
    rating: '4.9'
  },
  {
    name: '羊肉串',
    description: '鲜嫩羊肉，孜然飘香',
    emoji: '🍖',
    rating: '4.8'
  },
  {
    name: '烤韭菜',
    description: '清香脆嫩，回味甘甜',
    emoji: '🌶️',
    rating: '4.7'
  },
  {
    name: '烤茄子',
    description: '软糯香甜，蒜香浓郁',
    emoji: '🥒',
    rating: '4.8'
  }
])
</script>

<style scoped>
@import '../assets/styles/common.css';

/* 热门推荐区域 */
.popular {
  padding: 8rem 0;
  background: white;
  position: relative;
}

.popular::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(45deg, rgba(255,69,0,0.02) 0%, transparent 50%),
    linear-gradient(-45deg, rgba(255,107,53,0.02) 0%, transparent 50%);
  pointer-events: none;
}

.popular-grid {
  position: relative;
  z-index: 2;
}

.popular-item {
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.popular-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,69,0,0.05) 0%, rgba(255,107,53,0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.popular-item:hover::before {
  opacity: 1;
}

.item-image {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 15px rgba(255,69,0,0.2));
}

.popular-item:hover .item-image {
  transform: scale(1.2) rotate(5deg);
  animation: itemFloat 2s ease-in-out infinite;
}

.item-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  position: relative;
}

.item-title::after {
  content: '';
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: linear-gradient(135deg, #ff4500, #ff6b35);
  border-radius: 1px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.popular-item:hover .item-title::after {
  opacity: 1;
}

.item-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 1rem;
}

.item-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
}

.rating-stars {
  font-size: 0.9rem;
  filter: drop-shadow(0 2px 4px rgba(255,193,7,0.3));
}

.rating-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ff4500;
}

/* 动画效果 */
.popular-item {
  animation: fadeInUp 0.8s ease-out;
}

.popular-item:nth-child(1) {
  animation-delay: 0.1s;
}

.popular-item:nth-child(2) {
  animation-delay: 0.2s;
}

.popular-item:nth-child(3) {
  animation-delay: 0.3s;
}

.popular-item:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes itemFloat {
  0%, 100% {
    transform: scale(1.2) rotate(5deg) translateY(0);
  }
  50% {
    transform: scale(1.2) rotate(5deg) translateY(-5px);
  }
}

/* 悬浮效果 */
.popular-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(255,69,0,0.15);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .popular {
    padding: 6rem 0;
  }
  
  .popular-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .item-image {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .item-title {
    font-size: 1.3rem;
  }
  
  .item-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .popular {
    padding: 4rem 0;
  }
  
  .popular-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .item-image {
    font-size: 2.5rem;
  }
  
  .item-title {
    font-size: 1.2rem;
  }
  
  .item-description {
    font-size: 0.85rem;
  }
  
  .rating-stars {
    font-size: 0.8rem;
  }
  
  .rating-text {
    font-size: 0.8rem;
  }
}

/* 特殊交互效果 */
.popular-item:active {
  transform: translateY(-2px) scale(0.98);
}

/* 加载动画 */
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.popular-item.loading {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}
</style>