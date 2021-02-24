import React from 'react'
import { FaMedium, FaBlogger, FaGithub, FaTwitter, FaPrayingHands } from 'react-icons/fa'
import { SocialIconsListContainer } from './styles'
import SocialIcon from '../SocialIcon/SocialIcon'
import { socialMedia } from '../../constants/socialMedia'

interface IconMapper {
  [key: string]: JSX.Element
}

function iconGen(name: string, size = 24) {
  const iconMapper: IconMapper = {
    github: <FaGithub className={`${name}-icon`} size={size} />,
    twitter: <FaTwitter className={`${name}-icon`} size={size} />,
    medium: <FaMedium className={`${name}-icon`} size={size} />,
    blogger: <FaBlogger className={`${name}-icon`} size={size} />,
    linktree: <FaPrayingHands className={`${name}-icon`} size={size} />
  }

  return iconMapper[name]
}

export default function SocialIconsList() {
  return (
    <SocialIconsListContainer>
      {socialMedia.map((media) => (
        <SocialIcon link={media.link} key={media.name} title={media.title}>
          {iconGen(media.name)}
        </SocialIcon>
      ))}
    </SocialIconsListContainer>
  )
}
