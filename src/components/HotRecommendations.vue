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
@import '../assets/styles/components/hot-recommendations.css';
</style>