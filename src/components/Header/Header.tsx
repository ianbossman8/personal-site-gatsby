import React from 'react'
import { Link } from 'gatsby'
import { AppHeader } from './styles'
import { ThemeButton } from '../../styles/buttons'
import Emoji from '../Emoji/Emoji'
import THEME from '../../constants/theme'
import SYMBOLS from '../../constants/symbols'

interface Props {
  title?: string
  description?: string
  colourTheme: THEME
  setColourTheme: (theme: THEME) => void
  isIndex: boolean
}

function Header(props: Props) {
  const { colourTheme, setColourTheme, isIndex } = props

  function handleThemeButtonClick() {
    const nextTheme = colourTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK

    setColourTheme(nextTheme)
  }

  return (
    <AppHeader>
      {!isIndex && <div></div>}
      <ThemeButton onClick={handleThemeButtonClick}>
        <Emoji
          label={'dim background'}
          symbol={SYMBOLS[colourTheme].themeSwitch}
        />
      </ThemeButton>
    </AppHeader>
  )
}

export default Header
