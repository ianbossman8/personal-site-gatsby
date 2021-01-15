import React from 'react'
import { GrClose } from 'react-icons/gr'
import { Container, ContentContainer, ModalHeader } from './styles'
import SocialIconsList from '../SocialIconsList/SocialIconsList'

interface Props {
  content: string
  info: string
  handleModalClose: () => void
}

function Modal(props: Props) {
  const { content, info, handleModalClose } = props

  function handleModalContentContainerClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation()
  }

  return (
    <Container onClick={handleModalClose}>
      <ContentContainer onClick={handleModalContentContainerClick}>
        <GrClose onClick={handleModalClose} className="modal-close-button" />
        <ModalHeader primary>{content}</ModalHeader>
        <div dangerouslySetInnerHTML={{ __html: info }} />
        <SocialIconsList />
      </ContentContainer>
    </Container>
  )
}

export default Modal
