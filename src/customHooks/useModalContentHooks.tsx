import React, { useState, useEffect, ReactNode } from 'react'
import { useAboutContentQuery } from '../queries/useAboutContentQuery'
import { useBlogsQuery } from '../queries/useBlogsQuery'
import { useProjectsQuery } from '../queries/useProjectsQuery'
import { PAGE_NAMES } from '../constants/pageNames'
import ContactForm from '../components/ContactForm/ContactForm'
import ListRolls from '../components/ListRolls/ListRolls'
import { Link } from 'gatsby'
import { LINKS } from '../constants/links'

interface ModalContent {
  title: string
  body: string | ReactNode
}

export type HooksReturnType = undefined | ModalContent

export default function useModalContentHooks(topic: string | undefined): HooksReturnType {
  const aboutMe = useAboutContentQuery()
  const blogsSnapshot = useBlogsQuery()
  const projectsSnapshot = useProjectsQuery()
  console.log(projectsSnapshot)
  const [modalContent, setModalContent] = useState<HooksReturnType>(undefined)

  const introItems = {
    [PAGE_NAMES.ABOUT]: { title: PAGE_NAMES.ABOUT, body: aboutMe },
    [PAGE_NAMES.CONTACT]: { title: PAGE_NAMES.CONTACT, body: <ContactForm /> },
    [PAGE_NAMES.BLOGS]: {
      title: PAGE_NAMES.BLOGS,
      body: (
        <>
          <Link to={LINKS.INTERNAL_LINKS.BLOGS}>See all blogs</Link>
          <ListRolls
            pinnedContent={blogsSnapshot.pinnedBlogs}
            latestContent={blogsSnapshot.latestBlogs}
          />
        </>
      )
    },
    [PAGE_NAMES.PROJECTS]: {
      title: PAGE_NAMES.PROJECTS,
      body: (
        <>
          <Link to={LINKS.INTERNAL_LINKS.PROJECTS}>See all projects</Link>
          <ListRolls
            pinnedContent={projectsSnapshot.pinnedProjects}
            latestContent={projectsSnapshot.latestProjects}
          />
        </>
      )
    },
    [PAGE_NAMES.PROMOTIONS]: { title: PAGE_NAMES.PROMOTIONS, body: <p>earth is sick :(</p> }
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
