import React from 'react'
import symbols from '../../constants/symbols'
import Emoji from '../Emoji/Emoji'
import { ToTopButton } from './styles'

export default function ScrollUpButton() {
  function handleClick() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <ToTopButton onClick={handleClick}>
      <Emoji label="to top" symbol={symbols.pointUp} />
    </ToTopButton>
  )
}
