import { PATH } from './path'

export const PAGE_META = {
  index: {
    title: 'Home',
    pathname: ''
  },
  blog: {
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
