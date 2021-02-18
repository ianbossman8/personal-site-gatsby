import React from 'react'
import { graphql } from 'gatsby'
import Base from '../components/Base/Base'
import ContactForm from '../components/ContactForm/ContactForm'
import { NodeData } from '../queries/useAllBlogPostsQuery'
import { pageMeta } from '../constants/meta'
import { AboutContainer, HTMLContainer } from './styles/about.styles'
import { H1, H2 } from '../styles/text'

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
      markdownRemark: { html }
    },
    path
  } = props

  return (
    <Base pageSeo={{ ...pageMeta[path] }}>
      <AboutContainer>
        <H1>about</H1>
        <HTMLContainer dangerouslySetInnerHTML={{ __html: html }} />
        <div className="contact-form">
          <H2>contact</H2>
          <ContactForm />
        </div>
      </AboutContainer>
    </Base>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
