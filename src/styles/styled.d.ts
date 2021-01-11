import 'styled-components'
import FONT_SIZE from '../constants/fontSize'

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      [FONT_SIZE.EL]: string
      [FONT_SIZE.L]: string
      [FONT_SIZE.N]: string
      [FONT_SIZE.XS]: string
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
      primary: string
    }
  }
}
