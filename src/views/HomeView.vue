<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">淄博烧烤</h1>
        <p class="hero-subtitle">灵魂烧烤，人间烟火</p>
        <p class="hero-description">在这里，每一串烧烤都承载着淄博人的热情与匠心</p>
        <div class="hero-actions">
          <button class="btn-primary">探索美味</button>
          <button class="btn-secondary">了解文化</button>
        </div>
      </div>
      <div class="hero-image">
        <!-- 这里可以放置烧烤图片 -->
        <div class="placeholder-image">🍢</div>
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
            <button class="btn-outline">了解更多</button>
          </div>
          <div class="culture-image">
            <div class="placeholder-image">🏮</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 这里可以添加组件逻辑
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* 英雄区域样式 */
.hero {
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 0 5%;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #ff6b35;
  font-weight: bold;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #ff6b35;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder-image {
  font-size: 15rem;
  opacity: 0.8;
}

/* 通用容器 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 章节标题 */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  font-weight: bold;
}

/* 特色介绍样式 */
.features {
  padding: 80px 0;
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 热门推荐样式 */
.popular {
  padding: 80px 0;
}

.popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.popular-item {
  text-align: center;
  padding: 1.5rem;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.popular-item:hover {
  transform: scale(1.05);
}

.item-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.popular-item h4 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.popular-item p {
  color: #666;
}

/* 文化故事样式 */
.culture {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.culture-content {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.culture-text {
  flex: 1;
}

.culture-text h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.culture-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.btn-outline {
  padding: 12px 24px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: white;
  color: #667eea;
}

.culture-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .culture-content {
    flex-direction: column;
    text-align: center;
  }
  
  .placeholder-image {
    font-size: 8rem;
  }
}
</style>