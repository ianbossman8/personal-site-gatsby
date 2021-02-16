import React from 'react'
import { Container } from './styles'
import { MainButton } from '../../styles/buttons'

interface Props {
  setModalContentTopic: React.Dispatch<React.SetStateAction<string | undefined>>
  items: { title: string; text: string }[]
}

export default function IntroBar(props: Props) {
  const { setModalContentTopic, items } = props

  function handleButtonlick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setModalContentTopic((event.target as HTMLButtonElement).value)
  }

  return (
    <Container>
      {items.map((item) => (
        <MainButton onClick={handleButtonlick} value={item.title} key={item.title}>
          {item.text}
        </MainButton>
      ))}
    </Container>
  )
}
