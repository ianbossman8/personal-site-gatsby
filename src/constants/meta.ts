import { PATH } from './path'

export const PAGE_META = {
  INDEX: {
    title: 'Home',
    pathname: PATH.ROOT
  },
  BLOG: {
    description: "List of awesome Ian Bossman's blogs",
    title: 'Blogs',
    pathname: PATH.BLOGS
  },
  404: {
    description: 'Page Not Found',
    title: '404',
    pathname: PATH[404]
  }
}
