import React, { ReactNode } from 'react'
import { GrClose } from 'react-icons/gr'
import useModalEscapeKeyHooks from '../../customHooks/useModalEscapeKeyHooks'
import SocialIconsList from '../SocialIconsList/SocialIconsList'
import { Background, ContentContainer, ModalHeader } from './styles'

interface Props {
  topic: string
  modalContent: string | ReactNode
  handleModalClose: () => void
  reverse: boolean
}

export default function Modal(props: Props) {
  const { topic, modalContent, reverse, handleModalClose } = props

  useModalEscapeKeyHooks(handleModalClose)

  function handleModalContentContainerClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation()
  }

  return (
    <Background onClick={handleModalClose}>
      <ContentContainer onClick={handleModalContentContainerClick} reverse={reverse}>
        <GrClose onClick={handleModalClose} className="modal--close-button" />
        <ModalHeader>{topic}</ModalHeader>
        {typeof modalContent === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: modalContent }} />
        ) : (
          modalContent
        )}
        <SocialIconsList />
      </ContentContainer>
    </Background>
  )
}
