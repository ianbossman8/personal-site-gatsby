import React, { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { Container, ContentContainer, ModalHeader } from './styles'
import SocialIconsList from '../SocialIconsList/SocialIconsList'
import { AllBlogPostsInfoQuery } from '../../queries/useAllBlogPostsQuery'

interface Props {
  content: string
  info: string
  blogsInfo?: AllBlogPostsInfoQuery['allMarkdownRemark']
  handleModalClose: () => void
}

function Modal(props: Props) {
  const { content, info, blogsInfo, handleModalClose } = props

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleModalClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function handleModalContentContainerClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation()
  }

  const isBlog = Boolean(content === 'blogs')

  return (
    <Container onClick={handleModalClose}>
      <ContentContainer
        onClick={handleModalContentContainerClick}
        main={isBlog}>
        <GrClose onClick={handleModalClose} className="modal-close-button" />
        <ModalHeader primary main={isBlog}>
          {content}
        </ModalHeader>
        <div dangerouslySetInnerHTML={{ __html: info }} />
        <SocialIconsList />
      </ContentContainer>
    </Container>
  )
}

export default Modal
