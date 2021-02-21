import styled, { css } from 'styled-components'
import { MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'
import { blockQuoteStyle, H1Style, H2Style, H3Style, pStyle } from '../../styles/text'

export const CommonStyles = css`
  box-sizing: border-box;
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

  blockquote {
    ${blockQuoteStyle()};
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    padding: 1rem 0.5rem;
  }
`

export const DumpContainer = styled.div`
  ${CommonStyles};
`
