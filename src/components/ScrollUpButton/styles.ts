import styled from 'styled-components'

export const ToTopButton = styled.button<{ showButton: boolean }>`
  position: absolute;
  right: 2rem;
  bottom: 0;
  visibility: ${({ showButton }) => (showButton ? 'visible' : 'hidden')};
  outline: none;
  border: none;
  border-radius: 50%;
  background: transparent;
  box-shadow: -1px -1px 4px rgba(255, 255, 255, 0.75), 1px 1px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:active {
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.4), inset -1px -2px 4px rgba(255, 255, 255, 0.25);
  }
`
