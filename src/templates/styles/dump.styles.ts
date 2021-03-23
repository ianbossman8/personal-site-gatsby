import styled, { css } from 'styled-components'
import { SIZE } from '../../constants/font'
import { MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'
import { blockQuoteStyle, H1Style, H2Style, H3Style, pStyle } from '../../styles/text'

export const CommonDumpStyles = css`
  max-width: 50rem;
  box-sizing: border-box;
  padding: 2rem;
  color: ${({ theme: { colours } }) => colours.secondary[1]};
  word-break: break-word;

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
    line-height: 1.5rem;

    a {
      color: ${({ theme: { colours } }) => colours.info[3]};
      text-decoration: underline;
    }
  }

  ul {
    li {
      margin: 0.375rem 0;
    }
  }

  blockquote {
    ${blockQuoteStyle()};
  }

  figcaption {
    font-size: ${({ theme: { font } }) => font.size[SIZE.XS]};
    color: ${({ theme: { colours } }) => colours.secondary[3]};
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    padding: 0.75rem 0.25rem;
  }
`

export const DumpContainer = styled.section`
  ${CommonDumpStyles};
`
