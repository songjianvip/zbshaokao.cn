<template>
  <div class="home">
    <!-- 英雄区域 -->
    <HeroSection />

    <!-- 烧烤特色 -->
    <BBQSpecialties />

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
import BBQSpecialties from '@/components/BBQSpecialties.vue'
import SpecialFeatures from '@/components/SpecialFeatures.vue'
import HotRecommendations from '@/components/HotRecommendations.vue'
import CultureStory from '@/components/CultureStory.vue'
</script>

<style scoped>
@import '../assets/styles/common.css';
@import '../assets/styles/views/home.css';
</style>