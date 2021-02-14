import styled, { css } from 'styled-components'
import { MEDIA_QUERY_SMALL_WIDTH_RULE } from '../../constants/styles'

export const PageContainer = styled.div<{ isIndex: boolean | undefined }>`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: max-content auto max-content;
  justify-items: center;
  background-color: ${({ theme }) => theme.colours.bg};
  padding: 1rem 1rem;
  transition: background-color 0.3s ease;

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    ${({ isIndex }) =>
      !isIndex &&
      css`
        padding: 1rem 0;
      `}
  }
`

export const MainContainer = styled.main<{ isIndex: boolean | undefined }>`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  ${({ isIndex }) =>
    isIndex
      ? css`
          align-self: center;
        `
      : css`
          align-self: flex-start;
        `}
`
