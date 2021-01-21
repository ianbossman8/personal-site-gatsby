import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: max-content auto max-content;
  justify-items: center;
  background-color: ${({ theme }) => theme.colours.primary[1]};
  padding: 1rem;
  transition: background-color 0.3s ease;
`

export const MainContainer = styled.main<{ isIndex: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: ${({ isIndex }) => (isIndex ? 'center' : 'flex-start')};
  padding: 1rem 0;
`
