import { PAGE_NAMES } from './pageNames'
import { LINKS } from './links'

export interface PageMeta {
  [key: string]: {
    title: string
    pathname: string
    description?: string
  }
}

export const pageMeta: PageMeta = {
  index: {
    title: PAGE_NAMES.HOME,
    pathname: LINKS.INTERNAL_LINKS.ROOT
  },
  about: {
    title: PAGE_NAMES.ABOUT,
    pathname: LINKS.INTERNAL_LINKS.ABOUT
  },
  blogs: {
    title: PAGE_NAMES.BLOGS,
    description: "List of awesome Ian Bossman's blogs",
    pathname: LINKS.INTERNAL_LINKS.BLOGS
  },
  projects: {
    title: PAGE_NAMES.PROJECTS,
    pathname: LINKS.INTERNAL_LINKS.PROJECTS
  },
  privacy: {
    title: PAGE_NAMES.PRIVACY,
    description: 'Privacy and cookies disclosure',
    pathname: LINKS.INTERNAL_LINKS.PRIVACY
  },
  promotions: {
    title: PAGE_NAMES.PROMOTIONS,
    pathname: LINKS.INTERNAL_LINKS.PROMOTIONS
  },
  404: {
    title: PAGE_NAMES[404],
    description: 'Page Not Found',
    pathname: LINKS.INTERNAL_LINKS[404]
  }
}
