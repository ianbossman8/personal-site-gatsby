import React from 'react'
import { FaBlogger, FaGithub, FaMedium, FaPrayingHands, FaTwitter } from 'react-icons/fa'
import { LINKS } from './links'

export const socialMediaIcons = [
  {
    name: 'github',
    link: LINKS.EXTERNAL_LINKS.GH,
    title: 'Github',
    icon: <FaGithub size={24} />
  },
  {
    name: 'twitter',
    link: 'https://www.google.com/',
    title: 'Twitter',
    icon: <FaTwitter size={24} />
  },
  {
    name: 'medium',
    link: LINKS.EXTERNAL_LINKS.M,
    title: 'Medium',
    icon: <FaMedium size={24} />
  },
  {
    name: 'blogger',
    link: 'https://www.google.com/',
    title: 'Blogger',
    icon: <FaBlogger size={24} />
  },
  {
    name: 'linktree',
    link: LINKS.EXTERNAL_LINKS.LT,
    title: 'LinkTree',
    icon: <FaPrayingHands size={24} />
  }
]
