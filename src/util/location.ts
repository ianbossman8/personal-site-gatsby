import { LINKS } from '../constants/links'

class Location {
  isLocationAvailable: boolean
  currentPath: string | undefined

  constructor() {
    this.isLocationAvailable = typeof location !== 'undefined'
    this.currentPath = this.isLocationAvailable ? location.pathname : undefined
  }

  isIndexPath(path: string) {
    return LINKS.INTERNAL_LINKS.ROOT === path
  }
}

export default new Location()
