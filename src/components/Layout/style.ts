import styled, { css, keyframes } from 'styled-components'

const containerStyle = css`
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
`

// const changeBackgroundPosition = keyframes`
// 0% {
//   background-position: 0% 50%;
// }
// 50% {
//   background-position: 100% 50%;
// }
// 100% {
//   background-position: 0% 50%;
// }
// `

export const IndexPageContainer = styled.div`
  ${containerStyle};
  display: grid;
  grid-template-rows: 1fr 20fr;
  background-color: ${({ theme }) => theme.colours.primary};
  transition: background-color 0.3s ease;
`

/* background-image: linear-gradient(45deg, #69c0ff, #fffb8f); */
/* background-size: 400% 400%; */
/* animation: 10s ${changeBackgroundPosition} ease infinite; */
