import React, { useEffect, useRef, useState } from 'react'
import useWindowResizeHook from '../../customHooks/useWindowResizeHook'
import symbols from '../../constants/symbols'
import Emoji from '../Emoji/Emoji'
import { ToTopButton } from './styles'

interface Props {
  isIndex: boolean
}

export default function ScrollUpButton(props: Props) {
  const { isIndex } = props
  const curHeight = useWindowResizeHook('height')
  const [showButton, setShowButton] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  function handleClick() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    if (curHeight && ref.current && curHeight <= ref.current.offsetTop) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }, [curHeight, ref.current])

  return (
    <ToTopButton onClick={handleClick} ref={ref} showButton={showButton || !isIndex}>
      <Emoji label="to top" symbol={symbols.pointUp} />
    </ToTopButton>
  )
}
