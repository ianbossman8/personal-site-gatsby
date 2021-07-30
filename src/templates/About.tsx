import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Base from '../components/Base/Base'
import ContactForm from '../components/ContactForm/ContactForm'
import { pageMeta } from '../constants/meta'
import { AboutContainer, SectionContainer } from './styles/about.styles'
import { H1, H2 } from '../styles/text'
import { PageHeader } from '../styles/pageHeader'

interface Props extends PageProps {
  data: {
    markdownRemark: {
      html: string
    }
  }
  path: string
}

export default function About(props: Props): JSX.Element {
  const {
    data: {
      markdownRemark: { html }
    },
    path
  } = props

  return (
    <Base pageSeo={{ ...pageMeta[path] }}>
      <AboutContainer>
        <PageHeader>
          <H1>About</H1>
        </PageHeader>
        <SectionContainer dangerouslySetInnerHTML={{ __html: html }} />
        <section className="contact-form">
          <H2>contact me</H2>
          <ContactForm />
        </section>
      </AboutContainer>
    </Base>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
