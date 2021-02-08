import React, { useState } from 'react'
import useModalContentHooks from '../customHooks/useModalContentHooks'
import Base from '../components/Base/Base'
import IntroBar from '../components/IntroBar/IntroBar'
import Emoji from '../components/Emoji/Emoji'
import { PAGE_META } from '../constants/meta'
import { INTRO_MENU } from '../constants/introMenu'
import SYMBOLS from '../constants/symbols'
import { ColourFulHeader } from '../styles/text'

const introItems = [
  { title: INTRO_MENU.ABOUT, text: INTRO_MENU.ABOUT },
  { title: INTRO_MENU.CONTACT, text: 'contact me' },
  { title: INTRO_MENU.BLOGS, text: INTRO_MENU.BLOGS },
  { title: INTRO_MENU.PROJECTS, text: INTRO_MENU.PROJECTS },
  { title: INTRO_MENU.GIVING, text: 'support people in need' }
]

export default function SiteIndex() {
  const [modalContentTopic, setModalContentTopic] = useState<string | undefined>(undefined)
  const modalContent = useModalContentHooks(modalContentTopic)

  function handleModalReset() {
    setModalContentTopic(undefined)
  }

  return (
    <Base pageSeo={{ ...PAGE_META.INDEX }} modalProps={{ modalContent, handleModalReset }}>
      <Emoji symbol={SYMBOLS.party} label="welcome image" />
      <ColourFulHeader>wagwan, this is bossman's life</ColourFulHeader>
      <IntroBar setModalContentTopic={setModalContentTopic} items={introItems} />
    </Base>
  )
}
