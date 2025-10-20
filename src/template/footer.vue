<template>
  <footer class="footer" id="contact">
    <div class="container">
      <div class="footer-content">
        <!-- 品牌信息 -->
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-icon">🍢</span>
            <span class="logo-text">淄博烧烤</span>
          </div>
          <p class="footer-description">
            传承经典，创新未来<br>
            让每一串烧烤都承载着淄博人的热情与匠心
          </p>
          <div class="social-links">
            <a href="#" class="social-link">📱</a>
            <a href="#" class="social-link">📧</a>
            <a href="#" class="social-link">🌐</a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer-section">
          <h3>快速链接</h3>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/menu">菜单</router-link></li>
            <li><router-link to="/culture">文化</router-link></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </div>

        <!-- 特色菜品 -->
        <div class="footer-section">
          <h3>特色推荐</h3>
          <ul class="footer-links">
            <li><a href="#">五花肉</a></li>
            <li><a href="#">羊肉串</a></li>
            <li><a href="#">烤韭菜</a></li>
            <li><a href="#">小饼卷肉</a></li>
          </ul>
        </div>
      <!-- 版权信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; 2024 淄博烧烤网. 保留所有权利.</p>
          <p>让世界品味淄博，让淄博走向世界</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 60px 0 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #ff6b35;
  font-weight: bold;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-icon {
  font-size: 2rem;
  margin-right: 0.5rem;
}

.footer-description {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 107, 53, 0.2);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #ff6b35;
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ff6b35;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.contact-icon {
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
}

.copyright p {
  margin: 0.5rem 0;
  opacity: 0.7;
}

.copyright p:last-child {
  color: #ff6b35;
  font-weight: 500;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-logo {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .contact-info {
    align-items: center;
  }

  .contact-item {
    justify-content: center;
  }
}
</style>
