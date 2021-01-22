import styled, { css } from 'styled-components'
import { MEDIA_QUERY_MEDIUM } from '../../constants/styles'

export const PageContainer = styled.div<{ isMain: boolean }>`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: max-content auto max-content;
  justify-items: center;
  background-color: ${({ theme }) => theme.colours.primary[1]};
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;

  ${MEDIA_QUERY_MEDIUM} {
    ${({ isMain }) =>
      !isMain &&
      css`
        padding: 1rem 0;
      `}
  }
`

export const MainContainer = styled.main<{ isIndex: boolean }>`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: ${({ isIndex }) => (isIndex ? 'center' : 'flex-start')};
  padding: 1rem 0;
`
