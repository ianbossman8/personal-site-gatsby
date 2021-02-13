import React from 'react'
import SocialIconsList from '../SocialIconsList/SocialIconsList'
import LinksList from '../LinksList/LinksList'
import linksGen from '../../util/linksGen'
import { PageMeta } from '../../constants/meta'
import {
  AppFooter,
  MainFooterText,
  InfoBox,
  FirstContainer,
  SecondContainer,
  Container
} from './style'
import { Divider } from '../../styles/divider'
import { H3, P } from '../../styles/text'
import { PAGE_NAMES } from '../../constants/pageNames'
import { SIZE } from '../../constants/font'

interface Props {
  isIndex: boolean
  pageMeta: PageMeta
}

function Footer(props: Props) {
  const { isIndex, pageMeta } = props

  const linksMeta = linksGen(pageMeta, [PAGE_NAMES[404], PAGE_NAMES.HOME])

  return (
    <AppFooter>
      {!isIndex ? (
        <>
          <InfoBox>
            <SecondContainer>
              <div>
                <H3>This Site</H3>
                <LinksList linksMeta={linksMeta} direction="column" />
              </div>
              <div>
                <H3>Popular Articles</H3>
                <P>Incoming</P>
                <P>Incoming</P>
                <P>Incoming</P>
                <P>Incoming</P>
              </div>
            </SecondContainer>
            <FirstContainer>
              <P>This is my blog</P>
              <SocialIconsList />
            </FirstContainer>
          </InfoBox>
        </>
      ) : (
        <Container>
          <LinksList linksMeta={linksMeta} showIcons={false} />
          <SocialIconsList />
        </Container>
      )}
      <Divider />
      <MainFooterText>
        © {new Date().getFullYear()} produced and designed by Ian Chan
      </MainFooterText>
    </AppFooter>
  )
}

export default Footer
