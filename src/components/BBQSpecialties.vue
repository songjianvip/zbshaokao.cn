<template>
  <section class="bbq-specialties" :class="{ 'is-mounted': isMounted }">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">淄博烧烤三大灵魂秘技</h2>
        <p class="section-subtitle">传承千年的烧烤文化，每一个细节都蕴含着淄博人的智慧与匠心</p>
      </div>

      <div class="specialties-grid">
        <!-- 小火炉 -->
        <div class="specialty-card" data-specialty="xiaohuo-lu">
          <div class="card-image">
            <img src="/images/xiaohuo-lu.svg" alt="小火炉" class="specialty-img">
            <div class="image-overlay">
              <span class="overlay-text">活烧烤</span>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">
              <span class="title-icon">🔥</span>
              小火炉
            </h3>
            <p class="card-description">
              小火炉烧烤，就是指每桌都有独立的小烤炉的炭火烧烤，这种烧烤又叫"活烧烤"。
              一般城市吃烧烤，都是将烤串烤好了端上桌，也就是既食烧烤。
            </p>
            <p class="card-highlight">
              正宗的淄博烧烤，每桌必有一个小火炉，上桌的肉串已经烤到半熟，火候由食客自己掌握。
            </p>
            <div class="card-tags">
              <span class="tag">每桌独立</span>
              <span class="tag">自主掌控</span>
              <span class="tag">炭火香味</span>
            </div>
          </div>
        </div>

        <!-- 三件套 -->
        <div class="specialty-card" data-specialty="san-jian-tao">
          <div class="card-image">
            <img src="/images/san-jian-tao.svg" alt="三件套" class="specialty-img">
            <div class="image-overlay">
              <span class="overlay-text">经典搭配</span>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">
              <span class="title-icon">🥙</span>
              三件套
            </h3>
            <div class="three-items">
              <span class="item">小饼</span>
              <span class="separator">·</span>
              <span class="item">小葱</span>
              <span class="separator">·</span>
              <span class="item">酱</span>
            </div>
            <p class="card-description">
              拿两串滋滋冒油的肉串，先裹上蘸料，然后摊在小饼上，手掌握住小饼将肉串攥紧，
              往后一拉签子，几块肉就这样完整包裹在小饼里面了，再放一段葱叶或者葱白，这么一卷，成就了独一无二的小饼。
            </p>
            <p class="card-highlight">
              大口感受着小饼的麦香，蘸料里花生芝麻和刚烤好的肉混合在一起，小饼让略微咸的肉变得适口，
              蘸料又提供了足够的香味提升，而大葱又很好的抵消了肉串的油腻，君臣互佐，相辅相成。
            </p>
            <div class="card-tags">
              <span class="tag">麦香小饼</span>
              <span class="tag">解腻大葱</span>
              <span class="tag">香味蘸料</span>
            </div>
          </div>
        </div>

        <!-- 天选之子 -->
        <div class="specialty-card" data-specialty="tian-xuan-zhi-zi">
          <div class="card-image">
            <img src="/images/tian-xuan-zhi-zi.svg" alt="天选之子" class="specialty-img">
            <div class="image-overlay">
              <span class="overlay-text">匠心腌制</span>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">
              <span class="title-icon">⭐</span>
              天选之子
            </h3>
            <div class="subtitle">材与料</div>
            <p class="card-description">
              各地的烧烤食材都差不太多，但烧烤的口味，却是把握在店家手里的"揽客秘技"，
              这就是不同烧烤店优劣高低的最大区别：腌料。
            </p>
            <p class="card-highlight">
              腌料是淄博烧烤的特色，家家腌料秘方不同，但水准是一致的高。有了味道的保证，
              剩下的火候，就交给客人们在小火炉上自由发挥了。
            </p>
            <div class="card-tags">
              <span class="tag">秘制腌料</span>
              <span class="tag">肥瘦相间</span>
              <span class="tag">层次丰富</span>
            </div>
          </div>
        </div>
      </div>

      <div class="section-footer">
        <div class="footer-quote">
          <blockquote>
            "在淄博，烧烤不仅仅是一种美食，更是一种生活态度，一种文化传承。"
          </blockquote>
          <cite>— 淄博烧烤文化</cite>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
.bbq-specialties {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f4e6 0%, #fff8dc 100%);
  position: relative;
  overflow: hidden;
}

.bbq-specialties::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle, rgba(218, 165, 32, 0.12) 2px, transparent 2.2px);
  background-size: 50px 50px;
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  color: #8b4513;
  margin-bottom: 16px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.1);
}

.section-subtitle {
  font-size: 1.1rem;
  color: #a0522d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.specialty-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.is-mounted .specialty-card {
  opacity: 1;
  transform: translateY(0);
}

.is-mounted .specialty-card:nth-child(1) { transition-delay: 0.05s; }
.is-mounted .specialty-card:nth-child(2) { transition-delay: 0.25s; }
.is-mounted .specialty-card:nth-child(3) { transition-delay: 0.45s; }

.specialty-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(139, 69, 19, 0.15);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(45deg, #f4e4bc, #d4a574);
}

.specialty-img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.specialty-card:hover .specialty-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(139, 69, 19, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
}

.card-content {
  padding: 30px;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  color: #8b4513;
  margin-bottom: 16px;
  font-weight: bold;
}

.title-icon {
  font-size: 1.8rem;
}

.three-items {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-weight: bold;
  color: #a0522d;
}

.item {
  background: #f4e4bc;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
}

.separator {
  color: #daa520;
  font-weight: bold;
}

.subtitle {
  font-size: 1.1rem;
  color: #daa520;
  font-weight: bold;
  margin-bottom: 16px;
}

.card-description {
  color: #654321;
  line-height: 1.7;
  margin-bottom: 16px;
}

.card-highlight {
  background: #fff8dc;
  padding: 16px;
  border-radius: 12px;
  border-left: 4px solid #daa520;
  color: #8b4513;
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: italic;
}

.featured-item {
  background: #f8f4e6;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.featured-title {
  color: #8b4513;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.featured-desc {
  color: #654321;
  line-height: 1.6;
  margin: 0;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: linear-gradient(45deg, #daa520, #b8860b);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: bold;
}

.section-footer {
  text-align: center;
}

.footer-quote blockquote {
  font-size: 1.2rem;
  color: #8b4513;
  font-style: italic;
  margin-bottom: 8px;
  position: relative;
}

.footer-quote blockquote::before,
.footer-quote blockquote::after {
  content: '"';
  font-size: 2rem;
  color: #daa520;
  font-weight: bold;
}

.footer-quote cite {
  color: #a0522d;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .bbq-specialties {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .specialties-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .card-content {
    padding: 24px;
  }

  .card-image {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-size: 1.3rem;
  }
}
</style>
