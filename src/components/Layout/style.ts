import styled, { css } from 'styled-components'
import { MEDIA_QUERY_MEDIUM_RULE } from '../../constants/styles'

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

  ${MEDIA_QUERY_MEDIUM_RULE} {
    ${({ isMain }) =>
      !isMain &&
      css`
        padding: 1rem 0;
      `}
  }
`

export const MainContainer = styled.main`
  width: inherit;
  display: flex;
  align-items: center;
  padding: 1rem 0;

  &.main-container {
    align-self: center;
    flex-direction: column-reverse;
  }

  &.secondary-container {
    align-self: flex-start;
    flex-direction: column;
  }
`
