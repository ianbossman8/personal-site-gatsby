import React from 'react'
import { graphql } from 'gatsby'
import Base from '../components/Base/Base'
import { NodeData } from '../queries/useAllBlogPostsQuery'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'
import { DumpContainer } from './styles/dump.styles'

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
  const isContact = path === LINKS.INTERNAL_LINKS.ABOUT

  return (
    <Base pageSeo={{ ...pageSeo }}>
      <DumpContainer>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
