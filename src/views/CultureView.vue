<template>
  <div class="culture">
    <!-- 头部横幅 -->
    <section class="culture-hero">
      <div class="container">
        <h1>淄博烧烤文化</h1>
        <p>传承千年的美食文化，承载着淄博人的热情与匠心</p>
      </div>
    </section>

    <!-- 历史传承 -->
    <section class="history">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>历史传承</h2>
            <p>淄博烧烤的历史可以追溯到数百年前，从最初的街头小摊到如今的文化名片，每一步都承载着深厚的历史底蕴。</p>
            <p>在这里，烧烤不仅仅是一种烹饪方式，更是一种生活态度，一种对美食的执着追求。</p>
            <ul class="timeline">
              <li>明清时期：街头烧烤摊点兴起</li>
              <li>民国时期：烧烤技艺日趋成熟</li>
              <li>改革开放：烧烤文化蓬勃发展</li>
              <li>新时代：成为城市文化名片</li>
            </ul>
          </div>
          <div class="image-content">
            <div class="placeholder-image">📜</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 制作工艺 -->
    <section class="craftsmanship">
      <div class="container">
        <h2 class="section-title">传统工艺</h2>
        <div class="craft-grid">
          <div class="craft-step">
            <div class="step-number">1</div>
            <h3>选材</h3>
            <p>精选优质食材，确保每一份烧烤的品质</p>
          </div>
          <div class="craft-step">
            <div class="step-number">2</div>
            <h3>腌制</h3>
            <p>秘制调料腌制，让食材充分入味</p>
          </div>
          <div class="craft-step">
            <div class="step-number">3</div>
            <h3>烧烤</h3>
            <p>炭火慢烤，掌握火候，锁住鲜美</p>
          </div>
          <div class="craft-step">
            <div class="step-number">4</div>
            <h3>装盘</h3>
            <p>精心摆盘，配以小饼和蘸料</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 文化特色 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">文化特色</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🏮</div>
            <h3>传统与现代</h3>
            <p>在保持传统工艺的同时，融入现代元素，让古老的烧烤文化焕发新的活力</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🤝</div>
            <h3>热情好客</h3>
            <p>淄博人的热情好客在烧烤文化中得到完美体现，让每位客人都感受到家的温暖</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎭</div>
            <h3>社交文化</h3>
            <p>烧烤不仅是美食，更是社交的载体，朋友聚会、家庭团聚的重要场所</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🌟</div>
            <h3>匠心精神</h3>
            <p>每一位烧烤师傅都秉承匠心精神，用心烤制每一串食材，追求完美品质</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 故事分享 -->
    <section class="stories">
      <div class="container">
        <h2 class="section-title">文化故事</h2>
        <div class="stories-grid">
          <div class="story-card">
            <h3>老张的烧烤摊</h3>
            <p>在淄博的一条老街上，老张经营着一家小小的烧烤摊。三十年来，他用同样的配方，同样的手艺，为无数食客带来美味。他说："烧烤不只是生意，更是一种情怀。"</p>
          </div>
          <div class="story-card">
            <h3>小饼的故事</h3>
            <p>淄博烧烤的小饼有着特殊的意义。它不仅是食物的载体，更是文化的象征。薄薄的饼皮包裹着浓浓的人情味，每一口都是对家乡的眷恋。</p>
          </div>
          <div class="story-card">
            <h3>传承的味道</h3>
            <p>从爷爷到父亲，再到儿子，三代人传承着同一种味道。这不仅是技艺的传承，更是文化的延续，是对美食的执着和对生活的热爱。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.culture {
  min-height: 100vh;
}

/* 头部横幅 */
.culture-hero {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.culture-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.culture-hero p {
  font-size: 1.3rem;
  opacity: 0.9;
}

/* 通用样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  font-weight: bold;
}

/* 历史传承 */
.history {
  padding: 80px 0;
  background: white;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.text-content h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.text-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #666;
}

.timeline {
  list-style: none;
  padding: 0;
}

.timeline li {
  padding: 10px 0;
  border-left: 3px solid #ff6b35;
  padding-left: 20px;
  margin-bottom: 10px;
  position: relative;
}

.timeline li::before {
  content: '';
  width: 10px;
  height: 10px;
  background: #ff6b35;
  border-radius: 50%;
  position: absolute;
  left: -7px;
  top: 15px;
}

.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder-image {
  font-size: 10rem;
  opacity: 0.6;
}

/* 制作工艺 */
.craftsmanship {
  padding: 80px 0;
  background: #f8f9fa;
}

.craft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.craft-step {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.step-number {
  width: 60px;
  height: 60px;
  background: #ff6b35;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.craft-step h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}

.craft-step p {
  color: #666;
  line-height: 1.6;
}

/* 文化特色 */
.features {
  padding: 80px 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-item {
  text-align: center;
  padding: 2rem;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
}

/* 故事分享 */
.stories {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stories .section-title {
  color: white;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.story-card {
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.story-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.story-card p {
  line-height: 1.6;
  opacity: 0.9;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .culture-hero h1 {
    font-size: 2.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .craft-grid,
  .features-grid,
  .stories-grid {
    grid-template-columns: 1fr;
  }
  
  .placeholder-image {
    font-size: 6rem;
  }
}
</style>