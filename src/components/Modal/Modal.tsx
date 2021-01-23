import React, { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { Container, ContentContainer, ModalHeader } from './styles'
import SocialIconsList from '../SocialIconsList/SocialIconsList'

interface Props {
  topic: string
  modalContent: string
  handleModalClose: () => void
}

function Modal(props: Props) {
  const { topic, modalContent, handleModalClose } = props

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleModalClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function handleModalContentContainerClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation()
  }

  const isBlog = Boolean(topic === 'blogs')

  return (
    <Container onClick={handleModalClose}>
      <ContentContainer onClick={handleModalContentContainerClick} main={isBlog}>
        <GrClose onClick={handleModalClose} className="modal--close-button" />
        <ModalHeader primary main={isBlog}>
          {topic}
        </ModalHeader>
        <div dangerouslySetInnerHTML={{ __html: modalContent }} />
        <SocialIconsList />
      </ContentContainer>
    </Container>
  )
}

export default Modal
