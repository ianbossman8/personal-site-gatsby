import styled, { css } from 'styled-components'
import { MEDIA_QUERY_SMALL_RULE } from '../../constants/styles'

export const PageContainer = styled.div<{ isIndex: boolean | undefined }>`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: max-content auto max-content;
  justify-items: center;
  background-color: ${({ theme }) => theme.colours.primary[1]};
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;

  ${MEDIA_QUERY_SMALL_RULE} {
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
  align-items: center;
  padding: 1rem 0;

  ${({ isIndex }) =>
    isIndex
      ? css`
          align-self: center;
          flex-direction: column-reverse;
        `
      : css`
          align-self: flex-start;
          flex-direction: column;
        `}
`
