import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Base from '../components/Base/Base'
import LargeCard from '../components/LargeCard/LargeCard'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'

export type Frontmatter = {
  title: string
  description: string
  date: Date
  edited_date: Date | string
  external_link: string
  repo_link: string
  main_language: string
  other_languages: string[]
  main_tech: string[]
}

type NodeData = {
  frontmatter: Frontmatter
  id: string
}

export type AllBlogPostsInfoQuery = {
  allMarkdownRemark: {
    edges: {
      node: NodeData
    }[]
    totalCount: number
  }
}

interface Props extends PageProps {
  data: AllBlogPostsInfoQuery
}

export default function Projects(props: Props) {
  const allProjectsInfo = props.data.allMarkdownRemark

  return (
    <Base pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS.PROJECTS] }}>
      <ul>
        {allProjectsInfo.edges.map((projects) => (
          <li key={projects.node.id}>{<LargeCard cardDetail={projects.node.frontmatter} />}</li>
        ))}
      </ul>
    </Base>
  )
}

export const projectsQuery = graphql`
  query {
    allMarkdownRemark(filter: { fields: { contentType: { eq: "projects" } } }) {
      edges {
        node {
          id
          frontmatter {
            external_link
            description
            main_language
            main_tech
            other_languages
            repo_link
            title
          }
        }
      }
    }
  }
`
