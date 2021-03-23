import React from 'react'
import { graphql } from 'gatsby'
import Base from '../components/Base/Base'
import { NodeData } from '../queries/useAllBlogPostsQuery'
import { pageMeta } from '../constants/meta'
import { DumpContainer } from './styles/dump.styles'
import { H1 } from '../styles/text'

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: NodeData['frontmatter']
    }
  }
  path: string
}

export default function Dump(props: Props) {
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

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
