import { LINKS } from './links'
import SYMBOLS from './symbols'

interface PAGE_META {
  [key: string]: {
    title: string
    pathname: string
    description?: string
    icon?: number
  }
}

export const PAGE_META: PAGE_META = {
  INDEX: {
    title: 'home',
    pathname: LINKS.INTERNAL_LINKS.ROOT,
    icon: SYMBOLS.house
  },
  ABOUT: {
    title: 'about',
    pathname: LINKS.INTERNAL_LINKS.ABOUT,
    icon: SYMBOLS.monkey
  },
  BLOG: {
    description: "List of awesome Ian Bossman's blogs",
    title: 'blogs',
    pathname: LINKS.INTERNAL_LINKS.BLOGS,
    icon: SYMBOLS.writingHand
  },
  PROJECTS: {
    title: 'projects',
    pathname: LINKS.INTERNAL_LINKS.PROJECTS,
    icon: SYMBOLS.tools
  },
  PRIVACY: {
    title: 'privacy',
    pathname: LINKS.INTERNAL_LINKS.PRIVACY,
    icon: SYMBOLS.detective
  },
  PROMOTIONS: {
    title: 'promotions',
    pathname: LINKS.INTERNAL_LINKS.PROMOTIONS,
    icon: SYMBOLS.gift
  },
  404: {
    title: '404',
    description: 'Page Not Found',
    pathname: LINKS.INTERNAL_LINKS[404]
  }
}
