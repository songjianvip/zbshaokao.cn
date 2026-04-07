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

    <section id="news" class="home-news">
      <div class="container">
        <div class="news-header">
          <h2 class="section-title news-title">新闻动态</h2>
          <p class="news-desc">把热度留在炭火上，把消息留在这里</p>
        </div>

        <div class="news-ticker" role="region" aria-label="最新快讯" :aria-live="isTickerPaused ? 'polite' : 'off'">
          <div class="ticker-label">快讯</div>
          <button
            class="ticker-toggle"
            type="button"
            :aria-pressed="isTickerPaused"
            @click="toggleTicker"
          >
            {{ isTickerPaused ? '播放' : '暂停' }}
          </button>
          <div class="ticker-track">
            <div class="ticker-items" :class="{ paused: isTickerPaused, static: isMobileViewport }">
              <template v-if="tickerNews.length">
                <a
                  class="ticker-item"
                  v-for="(item, index) in tickerNews"
                  :key="`${item.time}-${index}`"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="ticker-dot"></span>
                  {{ item.time }}｜{{ item.title }}
                </a>
              </template>
              <span v-else class="ticker-empty">暂无快讯</span>
            </div>
          </div>
        </div>

        <div class="news-grid grid grid-3">
          <template v-if="sortedNews.length">
            <a
              class="news-card card"
              v-for="(item, index) in sortedNews"
              :key="`${item.time}-${item.url}`"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              :style="{ animationDelay: `${index * 0.08}s` }"
            >
              <div class="news-meta">
                <time class="news-date" :datetime="item.time">{{ item.time }}</time>
                <span class="news-source">{{ item.source }}</span>
                <span class="news-external">外链</span>
              </div>
              <h3 class="news-card-title">{{ item.title }}</h3>
              <span class="news-more">打开链接 →</span>
            </a>
          </template>
          <div v-else class="news-card card news-empty">
            <div class="news-meta">
              <span class="news-external">外链</span>
            </div>
            <h3 class="news-card-title">暂无新闻</h3>
            <span class="news-more">后续更新敬请期待</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 文化故事 -->
    <CultureStory />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import BBQSpecialties from '@/components/BBQSpecialties.vue'
import SpecialFeatures from '@/components/SpecialFeatures.vue'
import HotRecommendations from '@/components/HotRecommendations.vue'
import CultureStory from '@/components/CultureStory.vue'

type NewsItem = {
  title: string
  url: string
  time: string
  source: string
}

const fallbackNewsItems: NewsItem[] = [
  {
    time: '2026-03-30',
    title: '媒体大V齐聚淄博张店共探文旅融合新“淄”味',
    url: 'https://news.iqilu.com/shandong/shandonggedi/20260330/5902320.shtml',
    source: '齐鲁网'
  },
  {
    time: '2026-03-27',
    title: '淄博烧烤“退烧”之后：没有凉，只是回到日常',
    url: 'https://baijiahao.baidu.com/s?id=1860825246393309930',
    source: '百家号'
  }
]

const newsItems = ref<NewsItem[]>(fallbackNewsItems)
const isTickerPaused = ref<boolean>(false)
const isMobileViewport = ref<boolean>(false)

const sortedNews = computed(() =>
  [...newsItems.value].sort((a, b) => b.time.localeCompare(a.time))
)

const tickerNews = computed(() => {
  if (!sortedNews.value.length) return []
  if (isMobileViewport.value) return sortedNews.value
  return [...sortedNews.value, ...sortedNews.value]
})

const updateViewport = () => {
  isMobileViewport.value = window.matchMedia('(max-width: 768px)').matches
  if (isMobileViewport.value) {
    isTickerPaused.value = true
  }
}

const toggleTicker = () => {
  isTickerPaused.value = !isTickerPaused.value
}

const loadNews = async () => {
  try {
    const response = await fetch('/data/news.json', { cache: 'no-store' })
    if (!response.ok) return
    const data = (await response.json()) as NewsItem[]
    if (Array.isArray(data) && data.length) {
      newsItems.value = data
    }
  } catch {
    newsItems.value = fallbackNewsItems
  }
}

onMounted(async () => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
  await loadNews()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateViewport)
})
</script>

<style scoped>
@import '../assets/styles/views/home.css';
</style>
