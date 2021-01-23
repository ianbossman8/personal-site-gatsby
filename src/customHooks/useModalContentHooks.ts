import { useState, useEffect } from 'react'
import { useAboutContentQuery } from '../queries/useAboutContentQuery'
import { SITE_TOPIC } from '../constants/siteTopic'

function useModalContentHooks(topic: string | undefined): string {
  const aboutMe = useAboutContentQuery()
  const [modalContent, setModalContent] = useState<string>('')

  useEffect(() => {
    if (topic === SITE_TOPIC.ABOUT) {
      setModalContent(aboutMe)
    } else if (topic === SITE_TOPIC.CONTACT) {
      setModalContent('<p>coming soon my g</p>')
    } else {
      setModalContent('')
    }
  }, [topic])

  return modalContent
}

export default useModalContentHooks
