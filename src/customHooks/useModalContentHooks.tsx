import React, { useState, useEffect, ReactNode } from 'react'
import { useAboutContentQuery } from '../queries/useAboutContentQuery'
import { PAGE_NAMES } from '../constants/pageNames'
import ContactForm from '../components/ContactForm/ContactForm'

interface ModalContent {
  title: string
  body: string | ReactNode
}

export type HooksReturnType = undefined | ModalContent

export default function useModalContentHooks(topic: string | undefined): HooksReturnType {
  const aboutMe = useAboutContentQuery()
  const [modalContent, setModalContent] = useState<HooksReturnType>(undefined)

  const introItems = {
    [PAGE_NAMES.ABOUT]: { title: PAGE_NAMES.ABOUT, body: aboutMe },
    [PAGE_NAMES.CONTACT]: { title: PAGE_NAMES.CONTACT, body: <ContactForm /> },
    [PAGE_NAMES.BLOGS]: { title: PAGE_NAMES.BLOGS, body: <p>latest blogs</p> },
    [PAGE_NAMES.PROJECTS]: { title: PAGE_NAMES.PROJECTS, body: <p>latest projects</p> },
    [PAGE_NAMES.PROMOTIONS]: { title: PAGE_NAMES.PROMOTIONS, body: <p>best deals</p> }
  }

  useEffect(() => {
    if (topic) {
      setModalContent(introItems[topic])
    } else {
      setModalContent(undefined)
    }
  }, [topic])

  return modalContent
}
