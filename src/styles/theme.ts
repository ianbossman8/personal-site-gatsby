import { DefaultTheme } from 'styled-components'
import { FONT_SIZE, FONT_WEIGHT } from '../constants/font'
import THEME from '../constants/theme'

const commonStyle = {
  font: {
    size: {
      [FONT_SIZE.EL]: '3rem',
      [FONT_SIZE.L]: '2rem',
      [FONT_SIZE.NL]: '1.75rem',
      [FONT_SIZE.N]: '1.5rem',
      [FONT_SIZE.S]: '1rem',
      [FONT_SIZE.XS]: '0.75rem'
    },
    weight: {
      [FONT_WEIGHT.L]: 600,
      [FONT_WEIGHT.N]: 400,
      [FONT_WEIGHT.S]: 200
    }
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
    primary: {
      1: '#ffffff',
      2: '#f5f5f5',
      3: '#f0f0f0'
    },
    secondary: {
      1: '#000000',
      2: '#1f1f1f',
      3: '#434343'
    }
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
    primary: {
      1: '#000000',
      2: '#1f1f1f',
      3: '#434343'
    },
    secondary: {
      1: '#ffffff',
      2: '#f5f5f5',
      3: '#f0f0f0'
    }
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
