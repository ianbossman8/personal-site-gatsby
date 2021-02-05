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
    title: 'Home',
    pathname: LINKS.INTERNAL_LINKS.ROOT
  },
  ABOUT: {
    title: 'About',
    pathname: LINKS.INTERNAL_LINKS.ABOUT,
    icon: SYMBOLS.monkey
  },
  BLOG: {
    description: "List of awesome Ian Bossman's blogs",
    title: 'Blogs',
    pathname: LINKS.INTERNAL_LINKS.BLOGS,
    icon: SYMBOLS.writingHand
  },
  PROJECTS: {
    title: 'Projects',
    pathname: LINKS.INTERNAL_LINKS.PROJECTS,
    icon: SYMBOLS.tools
  },
  PRIVACY: {
    title: 'Privacy',
    pathname: LINKS.INTERNAL_LINKS.PRIVACY,
    icon: SYMBOLS.detective
  },
  PROMOTIONS: {
    title: 'Promotions',
    pathname: LINKS.INTERNAL_LINKS.PROMOTIONS,
    icon: SYMBOLS.gift
  },
  404: {
    description: 'Page Not Found',
    title: '404',
    pathname: LINKS.INTERNAL_LINKS[404]
  }
}
