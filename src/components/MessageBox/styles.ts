import styled from 'styled-components'
import { MESSAGE_STATE } from './MessageBox'

export const Message = styled.div<{ state: string | undefined; messageState: MESSAGE_STATE }>`
  position: relative;
  display: flex;
  align-items: center;
  border: 0.125rem solid
    ${({ theme: { colours }, state, messageState }) =>
      state === messageState.SUCCESS ? colours.info[2] : colours.alert[2]};
  padding: 0.5rem 1rem;

  .message-box--fail-icon {
    margin: 0 0.5rem 0 0;
    color: ${({ theme: { colours } }) => colours.alert[2]};
  }

  .message-box--success-icon {
    margin: 0 0.5rem 0 0;
    color: ${({ theme: { colours } }) => colours.info[2]};
  }

  .message-box--close-button {
    position: absolute;
    margin: 0 0 0 0.5rem;
    cursor: pointer;
    right: 0.25rem;
    top: 0.25rem;
  }
`
