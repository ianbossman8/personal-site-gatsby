import React from 'react'
import { IntroBarContainer } from './styles'
import { MainButton } from '../../styles/buttons'

interface Props {
  setModalContentTopic: React.Dispatch<React.SetStateAction<string | undefined>>
  items: { title: string; text: string }[]
}

export default function IntroBar(props: Props) {
  const { setModalContentTopic, items } = props

  function handleButtonlick(
    event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement, MouseEvent>
  ) {
    const target = event.target as HTMLButtonElement | HTMLSpanElement
    event.stopPropagation()

    if (target.nodeName === 'SPAN') {
      setModalContentTopic(target.title)
    } else {
      setModalContentTopic((target as HTMLButtonElement).value)
    }
  }

  return (
    <IntroBarContainer>
      {items.map((item) => (
        <MainButton onClick={handleButtonlick} value={item.title} key={item.title}>
          <span title={item.text} className={`intro-bar__${item.text}`}>
            {item.text}
          </span>
        </MainButton>
      ))}
    </IntroBarContainer>
  )
}
