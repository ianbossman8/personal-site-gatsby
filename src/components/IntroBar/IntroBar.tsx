import React from 'react'
import { navigate } from 'gatsby'
import { Container } from './styles'
import Emoji from '../Emoji/Emoji'
import { MainButton } from '../../styles/buttons'
import SYMBOLS from '../../constants/symbols'
import { SIZE } from '../../constants/font'

interface Props {
  setModalContent: React.Dispatch<React.SetStateAction<string | undefined>>
}

function IntroBar(props: Props) {
  function handleButtonlick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const target = event.target as HTMLButtonElement

    if (target.title === 'blogs' || target.value === 'blogs') {
      return navigate('/blogs')
    }

    if (target.nodeName === 'SPAN') {
      props.setModalContent(target.title)
    } else {
      props.setModalContent((isModalOn) =>
        !isModalOn ? target.value : undefined
      )
    }
  }

  return (
    <Container>
      <MainButton onClick={handleButtonlick} value="about">
        <span title="about">about</span>
      </MainButton>
      <MainButton onClick={handleButtonlick} value="contact">
        <span title="contact">contact me</span>
      </MainButton>
      <MainButton onClick={handleButtonlick} value="blogs">
        <span title="blogs">blogs</span>
      </MainButton>
      <MainButton>
        <span title="giving">
          <a href="https://linktr.ee/ianbossman" target="blank">
            <Emoji symbol={SYMBOLS.pointRight} size={SIZE.N} />
            support people in need
            <Emoji symbol={SYMBOLS.pointLeft} size={SIZE.N} />
          </a>
        </span>
      </MainButton>
    </Container>
  )
}

export default IntroBar
