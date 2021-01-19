import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colours.primary[1]};
  padding: 1rem;
  transition: background-color 0.3s ease;
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
