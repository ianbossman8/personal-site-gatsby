import 'styled-components'
import { SIZE } from '../constants/font'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      size: {
        [SIZE.EL]: string
        [SIZE.L]: string
        [SIZE.NL]: string
        [SIZE.N]: string
        [SIZE.S]: string
        [SIZE.XS]: string
      }
      weight: {
        [SIZE.L]: number
        [SIZE.N]: number
        [SIZE.S]: number
      }
    }
    letterSpacing: {
      [SIZE.L]: string
      [SIZE.N]: string
      [SIZE.S]: string
    }
    colours: {
      main: {
        1: string
        2: string
        3: string
      }
      info: {
        1: string
        2: string
        3: string
      }
      warn: {
        1: string
        2: string
        3: string
      }
      alert: {
        1: string
        2: string
        3: string
      }
      primary: {
        1: string
        2: string
        3: string
        blur: string
      }
      secondary: {
        1: string
        2: string
        3: string
        blur: string
      }
      brands: {
        twitter: string
        github: string
        medium: string
        blogger: string
      }
    }
  }
}
