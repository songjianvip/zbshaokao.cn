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
const defaultKeywords = '淄博烧烤,淄博美食,小饼卷肉,炭火烧烤,烧烤文化,山东美食'
const defaultOgImage = '/images/og-cover.svg'
const defaultRobots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'

const setStructuredData = (jsonLd: Record<string, unknown>) => {
  const id = 'seo-structured-data'
  const existing = document.getElementById(id)
  if (existing) {
    existing.textContent = JSON.stringify(jsonLd)
    return
  }
  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(script)
}

const getStructuredData = (
  canonical: string,
  title: string,
  description: string,
  isHomePage: boolean
) => {
  if (isHomePage) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '淄博烧烤网',
      url: window.location.origin,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${window.location.origin}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      },
      description
    }
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonical,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '首页',
          item: `${window.location.origin}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: canonical
        }
      ]
    }
  }
}

router.afterEach((to) => {
  const title = (to.meta.title as string | undefined) ?? defaultTitle
  const description = (to.meta.description as string | undefined) ?? defaultDescription
  const keywords = (to.meta.keywords as string | undefined) ?? defaultKeywords
  const ogImage = (to.meta.ogImage as string | undefined) ?? defaultOgImage
  const robots = (to.meta.robots as string | undefined) ?? defaultRobots

  document.title = title
  setMetaByName('description', description)
  setMetaByName('keywords', keywords)
  setMetaByName('robots', robots)
  setMetaByProperty('og:title', title)
  setMetaByProperty('og:description', description)
  setMetaByProperty('og:image', ogImage)
  setMetaByName('twitter:title', title)
  setMetaByName('twitter:description', description)
  setMetaByName('twitter:image', ogImage)

  const pathWithoutHash = to.fullPath.split('#')[0]
  const canonical = `${window.location.origin}${pathWithoutHash}`
  setCanonical(canonical)
  setMetaByProperty('og:url', canonical)
  setStructuredData(getStructuredData(canonical, title, description, to.path === '/'))
})

app.mount('#app')
