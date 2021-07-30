import React from 'react'
import { Link } from 'gatsby'
import CustomGatsbyImage from '../CustomGatsbyImage/CustomGatsbyImage'
import { ListRollsContainer, ItemContainer, InfoBox, BottomInfoBox } from './style'
import { H3, P } from '../../styles/text'
import { LightBlogsQueryResponse } from '../../queries/useBlogsQuery'
import { LightProjectsQueryResponse } from '../../queries/useProjectsQuery'
import { languageLogo } from '../../constants/icons'

type Node = LightBlogsQueryResponse | LightProjectsQueryResponse

interface Props {
  pinnedContent: {
    edges: {
      node: Node
    }[]
  }
  latestContent: {
    edges: {
      node: Node
    }[]
  }
}

interface ItemsProps {
  items: {
    node: Node
  }[]
}

function Items(props: ItemsProps): JSX.Element {
  return (
    <>
      {props.items.map(({ node }) => {
        const { id, frontmatter, fields } = node

        let element

        if ('external_link' in frontmatter) {
          element = (
            <Link to={frontmatter.external_link}>
              {frontmatter.thumbnail ? (
                <CustomGatsbyImage
                  imageDetail={frontmatter.thumbnail.childImageSharp}
                  description={frontmatter.thumbnail_description}
                />
              ) : (
                languageLogo[frontmatter.main_language]
              )}
              <InfoBox>
                <P>{frontmatter.title}</P>
                <BottomInfoBox>
                  <span>{frontmatter.main_language}</span>
                  <span>{frontmatter.main_tech}</span>
                  <span>{frontmatter.date}</span>
                </BottomInfoBox>
              </InfoBox>
            </Link>
          )
        } else {
          element = (
            <a href={fields.slug}>
              {frontmatter.thumbnail && (
                <CustomGatsbyImage
                  imageDetail={frontmatter.thumbnail.childImageSharp}
                  description={frontmatter.thumbnail_description}
                />
              )}
              <InfoBox>
                <P>{frontmatter.title}</P>
                <BottomInfoBox>
                  {frontmatter.categories.map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                  <span>{frontmatter.edited_date}</span>
                </BottomInfoBox>
              </InfoBox>
            </a>
          )
        }

        return <ItemContainer key={id}>{element}</ItemContainer>
      })}
    </>
  )
}

export default function ListRolls(props: Props): JSX.Element {
  const { pinnedContent, latestContent } = props

  return (
    <ListRollsContainer>
      <H3>Editor Selected</H3>
      <Items items={pinnedContent.edges} />
      {latestContent.edges.length > 0 && (
        <>
          <H3>Latest</H3>
          <Items items={latestContent.edges} />
        </>
      )}
    </ListRollsContainer>
  )
}
