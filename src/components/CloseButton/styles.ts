import styled from 'styled-components'

export const CloseButtonContainer = styled.div`
  position: sticky;
  top: 0;
  width: min-content;
  float: right;
  cursor: pointer;

  svg {
    fill: ${({ theme: { colours } }) => colours.primary[1]};
  }
`
