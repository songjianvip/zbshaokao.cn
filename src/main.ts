import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const ensureMetaTag = (selector: string, create: () => HTMLElement) => {
  const existing = document.head.querySelector(selector)
  if (existing) return existing as HTMLElement
  const el = create()
  document.head.appendChild(el)
  return el
}

const setMetaByName = (name: string, content: string) => {
  const el = ensureMetaTag(`meta[name="${name}"]`, () => {
    const meta = document.createElement('meta')
    meta.setAttribute('name', name)
    return meta
  }) as HTMLMetaElement
  el.setAttribute('content', content)
}

const setMetaByProperty = (property: string, content: string) => {
  const el = ensureMetaTag(`meta[property="${property}"]`, () => {
    const meta = document.createElement('meta')
    meta.setAttribute('property', property)
    return meta
  }) as HTMLMetaElement
  el.setAttribute('content', content)
}

const setCanonical = (href: string) => {
  const el = ensureMetaTag('link[rel="canonical"]', () => {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    return link
  }) as HTMLLinkElement
  el.setAttribute('href', href)
}

const defaultTitle = '淄博烧烤网 - 灵魂烧烤，人间烟火'
const defaultDescription =
  '淄博烧烤官方网站，体验正宗的淄博烧烤文化。炭火烧烤、小饼卷肉、人文关怀，感受淄博人的热情与匠心。'

router.afterEach((to) => {
  const title = (to.meta.title as string | undefined) ?? defaultTitle
  const description = (to.meta.description as string | undefined) ?? defaultDescription

  document.title = title
  setMetaByName('description', description)
  setMetaByProperty('og:title', title)
  setMetaByProperty('og:description', description)
  setMetaByName('twitter:title', title)
  setMetaByName('twitter:description', description)

  const pathWithoutHash = to.fullPath.split('#')[0]
  const canonical = `${window.location.origin}${pathWithoutHash}`
  setCanonical(canonical)
  setMetaByProperty('og:url', canonical)
})

app.mount('#app')
