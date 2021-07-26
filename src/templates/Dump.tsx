import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Base from '../components/Base/Base'
import { pageMeta } from '../constants/meta'
import { DumpContainer } from './styles/dump.styles'
import { H1 } from '../styles/text'
import { Frontmatter } from '../types'

interface Props extends PageProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: Pick<Frontmatter, 'title' | 'description'>
    }
  }
  path: string
}

export default function Dump(props: Props): JSX.Element {
  const {
    data: {
      markdownRemark: { html, frontmatter }
    },
    path
  } = props

  const pageSeo =
    typeof pageMeta[path] !== 'undefined'
      ? pageMeta[path]
      : {
          title: frontmatter.title,
          description: frontmatter.description,
          pathname: path
        }

  return (
    <Base pageSeo={{ ...pageSeo }}>
      <DumpContainer>
        <H1>{frontmatter.title}</H1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </DumpContainer>
    </Base>
  )
}

export const dumpQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
