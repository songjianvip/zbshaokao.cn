// 菜单项接口
export interface MenuItem {
  id: number
  name: string
  description: string
  category: string
  emoji: string
  tags: string[]
}

// 菜单分类接口
export interface Category {
  id: string
  name: string
}

// 导航链接接口
export interface NavLink {
  to: string
  name: string
  external?: boolean
}

// 特色卡片接口
export interface FeatureCard {
  icon: string
  title: string
  description: string
}

// 热门推荐项接口
export interface PopularItem {
  image: string
  title: string
  description: string
}

// 联系信息接口
export interface ContactInfo {
  icon: string
  text: string
}

// 社交链接接口
export interface SocialLink {
  icon: string
  url: string
  name: string
}

// 制作工艺步骤接口
export interface CraftStep {
  number: number
  title: string
  description: string
}

// 文化特色接口
export interface CultureFeature {
  icon: string
  title: string
  description: string
}

// 故事卡片接口
export interface StoryCard {
  title: string
  content: string
}