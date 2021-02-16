import { PageMeta } from '../constants/meta'
import { PAGE_NAMES } from '../constants/pageNames'
import symbols from '../constants/symbols'

export interface LinksObj {
  title: string
  icon: number
  pathname: string
}

const iconMapper = {
  [PAGE_NAMES.HOME]: symbols.house,
  [PAGE_NAMES.ABOUT]: symbols.monkey,
  [PAGE_NAMES.BLOGS]: symbols.writingHand,
  [PAGE_NAMES.PROJECTS]: symbols.tools,
  [PAGE_NAMES.PRIVACY]: symbols.detective,
  [PAGE_NAMES.PROMOTIONS]: symbols.gift
}

export default function linksGen(pageMeta: PageMeta, filter: string[]) {
  return Object.keys(pageMeta).reduce((acc, cur) => {
    const pathname = pageMeta[cur].pathname

    if (!filter.includes(pageMeta[cur].title)) {
      acc.push({
        title: pageMeta[cur].title,
        icon: iconMapper[pageMeta[cur].title],
        pathname
      })
    }

    return acc
  }, [] as LinksObj[])
}
