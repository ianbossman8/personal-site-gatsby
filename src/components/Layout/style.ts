import styled from 'styled-components'

export const IndexPageContainer = styled.div`
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 20fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.colours.primary};
  padding: 1rem;
  transition: background-color 0.3s ease;
`

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`
