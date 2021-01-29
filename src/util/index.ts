import { PATH } from '../constants/path'

export class Location {
  isLocationAvailable: boolean
  currentPath: string | undefined

  constructor() {
    this.isLocationAvailable = typeof location !== 'undefined'
    this.currentPath = this.isLocationAvailable ? location.pathname : undefined
  }

  isIndexPath(path: string) {
    return PATH.ROOT === path
  }

  isSecondaryPath(curPath: string) {
    let isSecondaryPath = false

    for (let path in PATH) {
      if (path !== curPath) {
        return (isSecondaryPath = true)
      }
    }
    return isSecondaryPath
  }
}
