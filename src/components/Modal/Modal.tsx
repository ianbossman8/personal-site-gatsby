import React from 'react'
import { GrClose } from 'react-icons/gr'
import { Container, ContentContainer, ModalHeader, BlockQuote } from './styles'
import SocialIconsList from '../SocialIconsList/SocialIconsList'
import { P } from '../../styles/text'

interface Props {
  content: string
  handleModalClose: () => void
}

function Modal(props: Props) {
  const { content, handleModalClose } = props

  function handleModalContentContainerClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation()
  }

  let info

  if (content === 'about') {
    info = (
      <>
        <BlockQuote cite="https://www.urbandictionary.com/define.php?term=Bossman">
          <P primary={false}>
            <mark>
              "Bossman - The most important title given to a person. Is only
              given to those most worthy."
            </mark>
          </P>
          <P>
            <mark>- Myself with reference to Urban Dictionary</mark>
          </P>
        </BlockQuote>
        <P>
          As I had just quoted the best definition of <i>BOSSMAN</i> you can
          ever get on the internet (OxBridge Dictionary ?? allow it my G), we
          know that to take on the role of a Bossman is no laughing matter. The
          responsibility you have to take on is real, and the whole mandem would
          be have both eyes on you. Take the lead on your life.
        </P>
        <P>
          This is Ian and this is my website to bring on all my knowledge and
          help you to become a better person
        </P>

        <SocialIconsList />
      </>
    )
  } else {
    info = <P>coming soon my g</P>
  }

  return (
    <Container onClick={handleModalClose}>
      <ContentContainer onClick={handleModalContentContainerClick}>
        <GrClose onClick={handleModalClose} className="modal-close-button" />
        <ModalHeader primary>about</ModalHeader>
        {info}
      </ContentContainer>
    </Container>
  )
}

export default Modal
