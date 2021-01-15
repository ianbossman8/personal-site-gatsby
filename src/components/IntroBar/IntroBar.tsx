import React from 'react'
import { Link } from 'gatsby'
import { MainButton } from '../../styles/buttons'
import { Container } from './styles'
import Emoji from '../Emoji/Emoji'
import SYMBOLS from '../../constants/symbols'
import { SIZE } from '../../constants/font'

interface Props {
  setModalContent: React.Dispatch<React.SetStateAction<string | undefined>>
}

function IntroBar(props: Props) {
  function handleButtonlick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if ((event.target as any).nodeName === 'SPAN') {
      props.setModalContent((event.target as any).title)
    } else {
      props.setModalContent((isModalOn) =>
        !isModalOn ? (event.target as HTMLButtonElement).value : undefined
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
      <MainButton>
        <span title="blogs">
          <Link to="/">blogs</Link>
        </span>
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
