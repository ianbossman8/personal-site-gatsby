import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { FaGlobe } from 'react-icons/fa'
import Base from '../components/Base/Base'
import Icon from '../components/Icon/Icon'
import LargeCard from '../components/LargeCard/LargeCard'
import { pageMeta } from '../constants/meta'
import { LINKS } from '../constants/links'
import { githubIconDetails, gitlabIconDetails, languageLogo } from '../constants/icons'
import { PageHeader } from '../styles/pageHeader'
import { PostsContainer } from './styles/generic.styles'
import { ProjectListContainer } from './styles/project.stles'
import { H1, P } from '../styles/text'
import { Divider } from '../styles/divider'

export type Frontmatter = {
  title: string
  description: string
  date: Date
  external_link: string
  repo_link: string
  main_language: string
  other_languages: string[]
  other_techs: string[]
  main_tech: string
}

type NodeData = {
  frontmatter: Frontmatter
  id: string
}

type AllProjectsInfoQuery = {
  allMarkdownRemark: {
    edges: {
      node: NodeData
    }[]
    totalCount: number
  }
}

interface Props extends PageProps {
  data: AllProjectsInfoQuery
}

export default function Projects(props: Props) {
  const allProjectsInfo = props.data.allMarkdownRemark

  function renderProjectList() {
    return (
      <ProjectListContainer>
        {allProjectsInfo.edges.map((projects) => {
          const { main_language, repo_link, external_link, title, ...projectDetails } =
            projects.node.frontmatter

          const regex = /github|gitlab/g
          const repoHost = projects.node.frontmatter.repo_link.match(regex) as RegExpMatchArray
          const repoIcon = (
            <Icon link={repo_link} title={title} brand={githubIconDetails.name}>
              {repoHost[0] === 'github' ? githubIconDetails.icon : gitlabIconDetails.icon}
            </Icon>
          )

          const siteIcon = (
            <Icon link={external_link} title={title}>
              <FaGlobe size={24} />
            </Icon>
          )

          return (
            <li key={projects.node.id}>
              <LargeCard
                cardDetail={{ ...projectDetails, title, main_language }}
                repoIcon={repoIcon}
                siteIcon={siteIcon}
                languageLogo={languageLogo[main_language]}
              />
            </li>
          )
        })}
      </ProjectListContainer>
    )
  }

  return (
    <Base pageSeo={{ ...pageMeta[LINKS.INTERNAL_LINKS.PROJECTS] }}>
      <PostsContainer>
        <PageHeader>
          <H1>Projects</H1>
          <P>Here is where you find amusement</P>
        </PageHeader>
        <Divider />
        {renderProjectList()}
      </PostsContainer>
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
            other_techs
            repo_link
            title
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
