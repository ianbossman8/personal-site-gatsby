export class Location {
  isLocationAvailable: boolean
  currentPath: string | undefined

  constructor() {
    this.isLocationAvailable = typeof location !== 'undefined'
    this.currentPath = this.isLocationAvailable ? location.pathname : undefined
  }

  isMatchingPath(path: string) {
    return this.currentPath === path
  }
}
