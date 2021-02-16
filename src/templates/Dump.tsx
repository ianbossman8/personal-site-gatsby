import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Base from '../components/Base/Base'
import { NodeData } from '../queries/useAllBlogPostsQuery'
import { pageMeta } from '../constants/meta'
import { H1Style, H2Style, H3Style, pStyle } from '../styles/text'

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: NodeData['frontmatter']
    }
  }
  path: string
}

const Container = styled.div`
  padding: 2rem;
  color: ${({ theme: { colours } }) => colours.secondary[1]};

  h1 {
    ${H1Style}
  }

  h2 {
    ${H2Style};
  }

  h3 {
    ${H3Style};
  }

  p {
    ${pStyle()};

    a {
      color: ${({ theme: { colours } }) => colours.info[3]};
    }
  }
`

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
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
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
