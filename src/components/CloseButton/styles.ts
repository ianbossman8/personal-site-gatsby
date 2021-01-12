import styled from 'styled-components'

export const CloseButtonContainer = styled.div`
  position: relative;
  width: min-content;
  float: right;
  cursor: pointer;

  svg {
    fill: ${({ theme: { colours } }) => colours.primary[1]};
  }
`
