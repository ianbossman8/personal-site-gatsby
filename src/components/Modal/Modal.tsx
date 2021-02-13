import React, { ReactNode } from 'react'
import { GrClose } from 'react-icons/gr'
import useModalEscapeKeyHooks from '../../customHooks/useModalEscapeKeyHooks'
import SocialIconsList from '../SocialIconsList/SocialIconsList'
import { Container, ContentContainer, ModalHeader } from './styles'

interface Props {
  topic: string
  modalContent: string | ReactNode
  handleModalClose: () => void
}

export default function Modal(props: Props) {
  const { topic, modalContent, handleModalClose } = props

  useModalEscapeKeyHooks(handleModalClose)

  function handleModalContentContainerClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation()
  }

  return (
    <Container onClick={handleModalClose}>
      <ContentContainer onClick={handleModalContentContainerClick}>
        <GrClose onClick={handleModalClose} className="modal--close-button" />
        <ModalHeader reverse={true}>{topic}</ModalHeader>
        {typeof modalContent === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: modalContent }} />
        ) : (
          modalContent
        )}
        <SocialIconsList />
      </ContentContainer>
    </Container>
  )
}
