import { IGatsbyImageData } from 'gatsby-plugin-image'

interface CommonFrontmatter {
  title: string
  description: string
  date: Date
  edited_date: Date | string
  author: string
  thumbnail_description: string | null
  thumbnail: {
    childImageSharp: IGatsbyImageData
  } | null
}

export interface BlogsFrontmatter extends CommonFrontmatter {
  tags: string[]
  categories: string[]
}

export interface ProjectsFrontmatter extends CommonFrontmatter {
  publish_date: Date
  main_tech: string
  main_language: string
  external_link: string
  repo_link: string
  other_techs: string[]
  other_languages: string[]
}

export type Frontmatter = BlogsFrontmatter | ProjectsFrontmatter

export interface NodeData<T> {
  frontmatter: T
  id: string
  fields: {
    slug: string
  }
}
