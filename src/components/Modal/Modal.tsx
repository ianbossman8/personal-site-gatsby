import React, { ReactNode } from 'react'
import { GrClose } from 'react-icons/gr'
import useModalEscapeKeyHooks from '../../customHooks/useModalEscapeKeyHooks'
import IconsList from '../IconsList/IconsList'
import { socialMediaIcons, techIcons } from '../../constants/icons'
import { Background, ContentContainer, ModalHeader } from './styles'
import { P } from '../../styles/text'

interface Props {
  topic: string
  modalContent: string | ReactNode
  handleModalClose: () => void
  reverse: boolean
}

export default function Modal(props: Props): JSX.Element {
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
        <div className="modal__contact">
          <P>Connect with me:</P>
          <IconsList icons={socialMediaIcons} />
          <P>Site Powered By:</P>
          <IconsList icons={techIcons} />
        </div>
      </ContentContainer>
    </Background>
  )
}
