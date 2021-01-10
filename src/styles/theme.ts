import { DefaultTheme } from 'styled-components'
import FONT_SIZE from '../constants/fontSize'
import THEME from '../constants/theme'

const commonStyle = {
  fontSize: {
    [FONT_SIZE.EL]: '3rem',
    [FONT_SIZE.L]: '2rem'
  }
}

const lightTheme: DefaultTheme = {
  ...commonStyle,
  colours: {
    main: {
      1: '#91d5ff',
      2: '#1890ff',
      3: '#0050b3'
    },
    info: {
      1: '#87e8de',
      2: '#13c2c2',
      3: '#006d75'
    },
    warn: {
      1: '#ffe58f',
      2: '#faad14',
      3: '#ad6800'
    },
    alert: {
      1: '#ffbb96',
      2: '#fa541c',
      3: '#ad2102'
    },
    primary: '#ffffff'
  }
}

const darkTheme: DefaultTheme = {
  ...commonStyle,
  colours: {
    main: {
      3: '#91d5ff',
      2: '#1890ff',
      1: '#0050b3'
    },
    info: {
      3: '#87e8de',
      2: '#13c2c2',
      1: '#006d75'
    },
    warn: {
      3: '#ffe58f',
      2: '#faad14',
      1: '#ad6800'
    },
    alert: {
      3: '#ffbb96',
      2: '#fa541c',
      1: '#ad2102'
    },
    primary: '#141414'
  }
}

const styleTheme = {
  [THEME.LIGHT]: {
    ...lightTheme
  },
  [THEME.DARK]: {
    ...darkTheme
  }
}

export { styleTheme }
