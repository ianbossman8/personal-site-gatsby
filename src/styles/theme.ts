import { DefaultTheme } from 'styled-components'
import { SIZE } from '../constants/font'
import THEME from '../constants/theme'

const commonStyle = {
  font: {
    size: {
      [SIZE.EL]: '3rem',
      [SIZE.L]: '2rem',
      [SIZE.NL]: '1.75rem',
      [SIZE.N]: '1.5rem',
      [SIZE.NS]: '1.25rem',
      [SIZE.S]: '1rem',
      [SIZE.XS]: '0.875rem'
    },
    weight: {
      [SIZE.L]: 600,
      [SIZE.N]: 400,
      [SIZE.S]: 300
    }
  },
  letterSpacing: {
    [SIZE.L]: '4px',
    [SIZE.N]: '2px',
    [SIZE.S]: '1px'
  }
}

const brandColour = {
  twitter: '#1da1f2',
  medium: '#00ab6c',
  blogger: '#f57d00'
}

const lightTheme: DefaultTheme = {
  ...commonStyle,
  colours: {
    bg: '#fff7e6',
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
      3: '#f0f0f0',
      blur: {
        strong: 'rgba(255, 255, 255, 0.85)',
        light: 'rgba(255, 255, 255, 0.25)'
      }
    },
    secondary: {
      1: '#000000',
      2: '#1f1f1f',
      3: '#434343',
      blur: 'rgba(0, 0, 0, 0.25)'
    },
    brands: {
      ...brandColour,
      github: '#333'
    }
  }
}

const darkTheme: DefaultTheme = {
  ...commonStyle,
  colours: {
    bg: '#141414',
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
      3: '#434343',
      blur: {
        strong: 'rgba(0, 0, 0, 0.85)',
        light: 'rgba(0, 0, 0, 0.25)'
      }
    },
    secondary: {
      1: '#ffffff',
      2: '#f5f5f5',
      3: '#f0f0f0',
      blur: 'rgba(255, 255, 255, 0.25)'
    },
    brands: {
      ...brandColour,
      github: '#fafafa'
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
