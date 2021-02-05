import { LINKS } from '../constants/links'

export interface LinksObj {
  title: string
  icon: number
  pathname: string
}

export default function linksGen(linksMeta: any) {
  return Object.keys(linksMeta).reduce((acc, cur) => {
    const pathname = linksMeta[cur].pathname

    if (pathname !== LINKS.INTERNAL_LINKS.ROOT && pathname !== LINKS.INTERNAL_LINKS[404]) {
      acc.push({
        title: linksMeta[cur].title,
        icon: linksMeta[cur].icon,
        pathname
      })
    }

    return acc
  }, [] as LinksObj[])
}
