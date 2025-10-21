<template>
  <footer class="footer" id="contact">
    <div class="container">
      <div class="footer-content">


      </div>

      <!-- 版权信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; 2023-2025 淄博烧烤网. 保留所有权利.</p>
          <p>让世界品味淄博，让淄博走向世界</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'

// 百度统计代码
onMounted(() => {
  // 确保统计代码只执行一次
  if (!window._hmt) {
    window._hmt = window._hmt || [];
    (function() {
      const hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?539b938b181b25c7433faa80d8a1b579";
      const s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  }
})
</script>

<style scoped>
@import '../assets/styles/components/footer-new.css';
</style>
