import React, { useState, useEffect, ReactNode } from 'react'
import { useAboutContentQuery } from '../queries/useAboutContentQuery'
import { INTRO_MENU } from '../constants/introMenu'

interface ModalContent {
  title: string
  body: string | ReactNode
}

export type HooksReturnType = undefined | ModalContent

function useModalContentHooks(topic: string | undefined): HooksReturnType {
  const aboutMe = useAboutContentQuery()
  const [modalContent, setModalContent] = useState<HooksReturnType>(undefined)

  const introItems = {
    [INTRO_MENU.ABOUT]: { title: INTRO_MENU.ABOUT, body: aboutMe },
    [INTRO_MENU.CONTACT]: { title: INTRO_MENU.CONTACT, body: <p>a form</p> },
    [INTRO_MENU.BLOGS]: { title: INTRO_MENU.BLOGS, body: <p>latest blogs</p> },
    [INTRO_MENU.PROJECTS]: { title: INTRO_MENU.PROJECTS, body: <p>latest projects</p> },
    [INTRO_MENU.GIVING]: { title: INTRO_MENU.GIVING, body: <p>best deals</p> }
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

export default useModalContentHooks
