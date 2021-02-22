import styled, { css } from 'styled-components'

export const PageContainer = styled.div<{ isIndex: boolean | undefined }>`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem;
  display: grid;
  grid-template-rows: max-content auto max-content;
  justify-items: center;
  background-color: ${({ theme }) => theme.colours.bg};
  transition: background-color 0.3s ease;
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
