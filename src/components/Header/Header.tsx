import React from 'react'
import Menu from '../Menu/Menu'
import Emoji from '../Emoji/Emoji'
import THEME from '../../constants/theme'
import symbols from '../../constants/symbols'
import { PageMeta } from '../../constants/meta'
import { PAGE_NAMES } from '../../constants/pageNames'
import { SIZE } from '../../constants/font'
import linksGen from '../../util/linksGen'
import { AppHeader } from './styles'
import { ThemeButton } from '../../styles/buttons'

interface Props {
  colourTheme: THEME
  pageMeta: PageMeta
  isIndex: boolean
  setColourTheme: (theme: THEME) => void
}

export default function Header(props: Props) {
  const { pageMeta, colourTheme, setColourTheme, isIndex } = props

  const linksMeta = linksGen(pageMeta, [PAGE_NAMES[404], PAGE_NAMES.PRIVACY])

  function handleThemeButtonClick() {
    const nextTheme = colourTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK

    setColourTheme(nextTheme)
  }

  return (
    <AppHeader isIndex={isIndex}>
      <ThemeButton onClick={handleThemeButtonClick}>
        <Emoji label="switch colour theme" symbol={symbols[colourTheme].themeSwitch} />
      </ThemeButton>
      <Menu linksMeta={linksMeta} isIndex={isIndex} size={SIZE.L} />
    </AppHeader>
  )
}
