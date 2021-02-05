import React from 'react'
import { Link, navigate } from 'gatsby'
import { FcHome } from 'react-icons/fc'
import Emoji from '../Emoji/Emoji'
import SYMBOLS from '../../constants/symbols'
import { SIZE } from '../../constants/font'
import { LINKS } from '../../constants/links'
import { SITE_TOPIC } from '../../constants/siteTopic'
import { Container } from './styles'
import { MainButton } from '../../styles/buttons'

interface Props {
  isIndex: boolean
  setModalContentTopic: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function IntroBar(props: Props) {
  const { setModalContentTopic, isIndex } = props

  function handleButtonlick(
    event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement, MouseEvent>
  ) {
    const target = event.target as HTMLButtonElement | HTMLSpanElement
    event.stopPropagation()

    if (
      target.className === SITE_TOPIC.BLOGS ||
      (target as HTMLButtonElement).value === SITE_TOPIC.BLOGS
    ) {
      return navigate(LINKS.INTERNAL_LINKS.BLOGS)
    }

    if (target.nodeName === 'SPAN') {
      setModalContentTopic(target.title)
    } else {
      setModalContentTopic((target as HTMLButtonElement).value)
    }
  }

  return (
    <Container isIndex={isIndex}>
      <Link to={LINKS.INTERNAL_LINKS.ROOT} className="home--link">
        <FcHome size={48} title="go home" />
      </Link>
      <MainButton onClick={handleButtonlick} value={SITE_TOPIC.ABOUT}>
        <span title={SITE_TOPIC.ABOUT} className={SITE_TOPIC.ABOUT}>
          about
        </span>
      </MainButton>
      <MainButton onClick={handleButtonlick} value={SITE_TOPIC.CONTACT}>
        <span title={SITE_TOPIC.CONTACT} className={SITE_TOPIC.CONTACT}>
          contact me
        </span>
      </MainButton>
      <MainButton onClick={handleButtonlick} value={SITE_TOPIC.BLOGS}>
        <span title={SITE_TOPIC.BLOGS} className={SITE_TOPIC.BLOGS}>
          blogs
        </span>
      </MainButton>
      <MainButton>
        <span title="giving">
          <a href={LINKS.EXTERNAL_LINKS.LT} target="blank">
            <Emoji symbol={SYMBOLS.pointRight} size={SIZE.N} />
            support people in need
            <Emoji symbol={SYMBOLS.pointLeft} size={SIZE.N} />
          </a>
        </span>
      </MainButton>
    </Container>
  )
}
