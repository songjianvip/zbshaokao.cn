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
            <div class="item-price">¥{{ item.price }}</div>
            <div class="item-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: '全部' },
  { id: 'meat', name: '肉类' },
  { id: 'vegetable', name: '蔬菜' },
  { id: 'seafood', name: '海鲜' },
  { id: 'special', name: '特色' }
]

const menuItems = [
  {
    id: 1,
    name: '五花肉',
    description: '精选优质五花肉，肥瘦相间，口感丰富',
    price: 15,
    category: 'meat',
    emoji: '🥩',
    tags: ['招牌', '必点']
  },
  {
    id: 2,
    name: '羊肉串',
    description: '新鲜羊肉，孜然调味，香嫩多汁',
    price: 12,
    category: 'meat',
    emoji: '🍖',
    tags: ['经典', '香辣']
  },
  {
    id: 3,
    name: '烤韭菜',
    description: '新鲜韭菜，清香脆嫩，回味甘甜',
    price: 8,
    category: 'vegetable',
    emoji: '🌶️',
    tags: ['清香', '下酒菜']
  },
  {
    id: 4,
    name: '烤茄子',
    description: '软糯茄子配蒜泥，香味浓郁',
    price: 10,
    category: 'vegetable',
    emoji: '🍆',
    tags: ['蒜香', '素食']
  },
  {
    id: 5,
    name: '烤鱿鱼',
    description: '新鲜鱿鱼，Q弹爽口，海鲜鲜味',
    price: 18,
    category: 'seafood',
    emoji: '🦑',
    tags: ['Q弹', '海鲜']
  },
  {
    id: 6,
    name: '小饼',
    description: '淄博特色小饼，松软香甜，卷肉必备',
    price: 3,
    category: 'special',
    emoji: '🥞',
    tags: ['特色', '主食']
  },
  {
    id: 7,
    name: '蘸料',
    description: '秘制蘸料，酸甜开胃，提升口感',
    price: 5,
    category: 'special',
    emoji: '🥄',
    tags: ['秘制', '调料']
  },
  {
    id: 8,
    name: '烤牛肉',
    description: '优质牛肉，嫩滑鲜美，营养丰富',
    price: 20,
    category: 'meat',
    emoji: '🥩',
    tags: ['优质', '营养']
  }
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return menuItems
  }
  return menuItems.filter(item => item.category === activeCategory.value)
})
</script>

<style scoped>
.menu {
  min-height: 100vh;
  padding: 80px 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: bold;
}

.page-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
}

.menu-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 10px 20px;
  border: 2px solid #ff6b35;
  background: white;
  color: #ff6b35;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.category-btn:hover,
.category-btn.active {
  background: #ff6b35;
  color: white;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.menu-item {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  display: flex;
  gap: 1rem;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.item-image {
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
}

.item-info {
  flex: 1;
}

.item-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.item-info p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.item-price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff6b35;
  margin-bottom: 1rem;
}

.item-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #ff6b35;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
  
  .menu-item {
    flex-direction: column;
    text-align: center;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>