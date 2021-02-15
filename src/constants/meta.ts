import { PAGE_NAMES } from './pageNames'
import { LINKS } from './links'

export interface PageMeta {
  [key: string]: {
    title: string
    pathname: string
  }
}

export const pageMeta: PageMeta = {
  [LINKS.INTERNAL_LINKS.ROOT]: {
    title: PAGE_NAMES.HOME,
    pathname: LINKS.INTERNAL_LINKS.ROOT
  },
  [LINKS.INTERNAL_LINKS.ABOUT]: {
    title: PAGE_NAMES.ABOUT,
    pathname: LINKS.INTERNAL_LINKS.ABOUT
  },
  [LINKS.INTERNAL_LINKS.BLOGS]: {
    title: PAGE_NAMES.BLOGS,
    pathname: LINKS.INTERNAL_LINKS.BLOGS
  },
  [LINKS.INTERNAL_LINKS.PROJECTS]: {
    title: PAGE_NAMES.PROJECTS,
    pathname: LINKS.INTERNAL_LINKS.PROJECTS
  },
  [LINKS.INTERNAL_LINKS.PRIVACY]: {
    title: PAGE_NAMES.PRIVACY,
    pathname: LINKS.INTERNAL_LINKS.PRIVACY
  },
  [LINKS.INTERNAL_LINKS.PROMOTIONS]: {
    title: PAGE_NAMES.PROMOTIONS,
    pathname: LINKS.INTERNAL_LINKS.PROMOTIONS
  },
  [LINKS.INTERNAL_LINKS[404]]: {
    title: PAGE_NAMES[404],
    pathname: LINKS.INTERNAL_LINKS[404]
  }
}
