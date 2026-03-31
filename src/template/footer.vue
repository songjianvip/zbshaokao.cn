<template>
  <footer class="footer" id="contact">
    <div class="container">
      <!-- 版权信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; 2023-2025 淄博烧烤网. 保留所有权利.</p>
          <p>让世界品味淄博，让淄博走向世界</p>
          <p class="icp-record">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="鲁ICP备20023832号备案信息"
            >鲁ICP备20023832号</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

defineOptions({
  name: 'AppFooter'
})

onMounted(() => {
  if (!import.meta.env.PROD) return
  if (!window._hmt) {
    window._hmt = window._hmt || [];
    (function() {
      const hm = document.createElement("script");
      hm.async = true
      hm.src = "https://hm.baidu.com/hm.js?539b938b181b25c7433faa80d8a1b579";
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(hm, firstScript);
        return
      }
      document.head.appendChild(hm)
    })();
  }
})
</script>

<style scoped>
@import '../assets/styles/components/footer-new.css';
</style>
