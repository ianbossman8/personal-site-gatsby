import React, { useState } from 'react'
import useModalContentHooks from '../customHooks/useModalContentHooks'
import Base from '../components/Base/Base'
import IntroBar from '../components/IntroBar/IntroBar'
import Emoji from '../components/Emoji/Emoji'
import { pageMeta } from '../constants/meta'
import { PAGE_NAMES } from '../constants/pageNames'
import { LINKS } from '../constants/links'
import symbols from '../constants/symbols'
import { ColourfulHeader } from '../styles/text'

const introItems = [
  { title: PAGE_NAMES.ABOUT, text: PAGE_NAMES.ABOUT },
  { title: PAGE_NAMES.BLOGS, text: PAGE_NAMES.BLOGS },
  { title: PAGE_NAMES.PROJECTS, text: PAGE_NAMES.PROJECTS },
  { title: PAGE_NAMES.CONTACT, text: 'contact me' },
  { title: PAGE_NAMES.PROMOTIONS, text: 'support people in need' }
]

export default function SiteIndex(): JSX.Element {
  const [modalContentTopic, setModalContentTopic] = useState<string | undefined>(undefined)
  const modalContent = useModalContentHooks(modalContentTopic)

  function handleModalReset() {
    setModalContentTopic(undefined)
  }

  return (
    <Base
      pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS.ROOT] }}
      modalProps={{ modalContent, handleModalReset }}
      reverse>
      <Emoji symbol={symbols.party} label="welcome image" />
      <ColourfulHeader>wagwan, this is bossman&apos;s life</ColourfulHeader>
      <IntroBar setModalContentTopic={setModalContentTopic} items={introItems} />
    </Base>
  )
}
