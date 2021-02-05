import React from 'react'
import SocialIconsList from '../SocialIconsList/SocialIconsList'
import LinksList from '../LinksList/LinksList'
import { AppFooter, MainFooterText, InfoBox, FirstContainer, SecondContainer } from './style'
import { LinksObj } from '../../util/linksGen'
import { Divider } from '../../styles/divider'
import { H3, P } from '../../styles/text'

interface Props {
  isIndex: boolean
  linksMeta?: LinksObj[]
}

function Footer(props: Props) {
  const { isIndex, linksMeta } = props

  return (
    <AppFooter isIndex={isIndex}>
      {!isIndex && linksMeta && (
        <>
          <InfoBox>
            <SecondContainer>
              <div>
                <H3 main>This Site</H3>
                <LinksList linksMeta={linksMeta} />
              </div>
              <div>
                <H3 main>Popular Articles</H3>
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
          <Divider />
        </>
      )}
      <MainFooterText>
        © {new Date().getFullYear()} produced and designed by Ian Chan
      </MainFooterText>
      {isIndex && <SocialIconsList />}
    </AppFooter>
  )
}

export default Footer
