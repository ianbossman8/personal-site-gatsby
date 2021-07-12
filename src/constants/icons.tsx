import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FaBlogger, FaGithub, FaMedium, FaPrayingHands, FaTwitter, FaGitlab } from 'react-icons/fa'
import {
  SiGatsby,
  SiGraphql,
  SiNetlify,
  SiReact,
  SiStyledComponents,
  SiTypescript,
  SiWebpack
} from 'react-icons/si'
import { LINKS } from './links'

interface GenericObj {
  [key: string]: any
}

export const languageLogo = {
  TypeScript: <StaticImage src="../images/ts-logo-512.png" alt="typescript icon" width={128} />
} as GenericObj

export const githubIconDetails = {
  name: 'github',
  link: LINKS.EXTERNAL_LINKS.GITHUB,
  title: 'Github',
  icon: <FaGithub size={24} />
}

export const gitlabIconDetails = {
  name: 'gitlab',
  link: LINKS.EXTERNAL_LINKS.GITLAB,
  title: 'GitLab',
  icon: <FaGitlab size={24} />
}

const twitterIconDetails = {
  name: 'twitter',
  link: 'https://www.google.com/',
  title: 'Twitter',
  icon: <FaTwitter size={24} />
}

const mediumIconDetails = {
  name: 'medium',
  link: LINKS.EXTERNAL_LINKS.MEDIUM,
  title: 'Medium',
  icon: <FaMedium size={24} />
}

const bloggerIconDetails = {
  name: 'blogger',
  link: 'https://www.google.com/',
  title: 'Blogger',
  icon: <FaBlogger size={24} />
}

const linktreeIconDetails = {
  name: 'linktree',
  link: LINKS.EXTERNAL_LINKS.LINKTREE,
  title: 'LinkTree',
  icon: <FaPrayingHands size={24} />
}

export const socialMediaIcons = [
  githubIconDetails,
  twitterIconDetails,
  mediumIconDetails,
  bloggerIconDetails,
  linktreeIconDetails
]

export const techIcons = [
  {
    name: 'gatsby',
    link: LINKS.EXTERNAL_LINKS.GATSBY,
    title: 'Gatsby',
    icon: <SiGatsby size={24} />
  },
  {
    name: 'react',
    link: LINKS.EXTERNAL_LINKS.REACT,
    title: 'React',
    icon: <SiReact size={24} />
  },
  {
    name: 'graphql',
    link: LINKS.EXTERNAL_LINKS.GRAPHQL,
    title: 'GraphQL',
    icon: <SiGraphql size={24} />
  },
  {
    name: 'styled-components',
    link: LINKS.EXTERNAL_LINKS.STYLEDCOMPONENT,
    title: 'Styled-Components',
    icon: <SiStyledComponents size={24} />
  },
  {
    name: 'typescript',
    link: LINKS.EXTERNAL_LINKS.TYPESCRIPT,
    title: 'Typescript',
    icon: <SiTypescript size={24} />
  },
  {
    name: 'webpack',
    link: LINKS.EXTERNAL_LINKS.WEBPACK,
    title: 'Webpack',
    icon: <SiWebpack size={24} />
  },
  {
    name: 'netlify',
    link: LINKS.EXTERNAL_LINKS.NETLIFY,
    title: 'Netlify',
    icon: <SiNetlify size={24} />
  }
]
