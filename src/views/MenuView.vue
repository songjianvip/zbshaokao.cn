<template>
  <div class="menu">
    <div class="container">
      <h1 class="page-title">烧烤菜单</h1>
      <p class="page-subtitle">精选优质食材，传承经典口味</p>
      
      <div class="menu-categories">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="['category-btn', { active: activeCategory === category.id }]"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>

      <div class="menu-grid">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="menu-item"
        >
          <div class="item-image">{{ item.emoji }}</div>
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <div class="item-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { MenuItem, Category } from '@/types'

const activeCategory = ref<string>('all')

const categories: Category[] = [
  { id: 'all', name: '全部' },
  { id: 'meat', name: '肉类' },
  { id: 'vegetable', name: '蔬菜' },
  { id: 'seafood', name: '海鲜' },
  { id: 'special', name: '特色' }
]

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: '五花肉',
    description: '精选优质五花肉，肥瘦相间，口感丰富',
    category: 'meat',
    emoji: '🥩',
    tags: ['招牌', '必点']
  },
  {
    id: 2,
    name: '羊肉串',
    description: '新鲜羊肉，孜然调味，香嫩多汁',
    category: 'meat',
    emoji: '🍖',
    tags: ['经典', '香辣']
  },
  {
    id: 3,
    name: '烤韭菜',
    description: '新鲜韭菜，清香脆嫩，回味甘甜',
    category: 'vegetable',
    emoji: '🌶️',
    tags: ['清香', '下酒菜']
  },
  {
    id: 4,
    name: '烤茄子',
    description: '软糯茄子配蒜泥，香味浓郁',
    category: 'vegetable',
    emoji: '🍆',
    tags: ['蒜香', '素食']
  },
  {
    id: 5,
    name: '烤鱿鱼',
    description: '新鲜鱿鱼，Q弹爽口，海鲜鲜味',
    category: 'seafood',
    emoji: '🦑',
    tags: ['Q弹', '海鲜']
  },
  {
    id: 6,
    name: '小饼',
    description: '淄博特色小饼，松软香甜，卷肉必备',
    category: 'special',
    emoji: '🥞',
    tags: ['特色', '主食']
  },
  {
    id: 7,
    name: '蘸料',
    description: '秘制蘸料，酸甜开胃，提升口感',
    category: 'special',
    emoji: '🥄',
    tags: ['秘制', '调料']
  },
  {
    id: 8,
    name: '烤牛肉',
    description: '优质牛肉，嫩滑鲜美，营养丰富',
    category: 'meat',
    emoji: '🥩',
    tags: ['优质', '营养']
  }
]

const filteredItems = computed<MenuItem[]>(() => {
  if (activeCategory.value === 'all') {
    return menuItems
  }
  return menuItems.filter(item => item.category === activeCategory.value)
})
</script>

<style scoped>
@import '../assets/styles/components/menu.css';
</style>