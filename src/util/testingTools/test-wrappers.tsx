import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import THEME from '../../constants/theme'
import { styleTheme } from '../../styles/theme'

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={styleTheme[THEME.LIGHT]}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
