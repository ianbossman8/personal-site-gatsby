import React from 'react'
import IconsList from '../IconsList/IconsList'
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
import { socialMediaIcons, techIcons } from '../../constants/icons'

interface Props {
  isIndex: boolean
  pageMeta: PageMeta
}

export default function Footer(props: Props) {
  const { isIndex, pageMeta } = props

  const linksMeta = linksGen(pageMeta, [PAGE_NAMES[404], PAGE_NAMES.HOME])

  const socialIcons = <IconsList icons={socialMediaIcons} />
  const currentYear = new Date().getFullYear()

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
              <P>Human Made</P>
              <P>Connect with me:</P>
              {socialIcons}
              <P>Site Powered By:</P>
              <IconsList icons={techIcons} />
            </FirstContainer>
          </InfoBox>
        </>
      ) : (
        <Container>
          <LinksList linksMeta={linksMeta} showIcons={false} />
          {socialIcons}
        </Container>
      )}
      <Divider />
      <MainFooterText>© {currentYear} produced and designed by Ian Chan</MainFooterText>
    </AppFooter>
  )
}
