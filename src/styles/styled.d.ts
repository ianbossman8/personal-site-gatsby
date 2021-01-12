import 'styled-components'
import { FONT_SIZE, FONT_WEIGHT } from '../constants/font'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      size: {
        [FONT_SIZE.EL]: string
        [FONT_SIZE.L]: string
        [FONT_SIZE.NL]: string
        [FONT_SIZE.N]: string
        [FONT_SIZE.S]: string
        [FONT_SIZE.XS]: string
      }
      weight: {
        [FONT_WEIGHT.L]: number
        [FONT_WEIGHT.N]: number
        [FONT_WEIGHT.S]: number
      }
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
      }
      secondary: {
        1: string
        2: string
        3: string
      }
    }
  }
}
