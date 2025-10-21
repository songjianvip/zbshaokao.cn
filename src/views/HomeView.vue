<template>
  <div class="home">
    <!-- 英雄区域 -->
    <HeroSection />

    <!-- 特色介绍 -->
    <SpecialFeatures />

    <!-- 热门推荐 -->
    <HotRecommendations />

    <!-- 文化故事 -->
    <CultureStory />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import SpecialFeatures from '@/components/SpecialFeatures.vue'
import HotRecommendations from '@/components/HotRecommendations.vue'
import CultureStory from '@/components/CultureStory.vue'
</script>

<style scoped>
@import '../assets/styles/common.css';

/* 首页主要内容区域 */
.home {
  min-height: 100vh;
  background: #fafafa;
}
</style>