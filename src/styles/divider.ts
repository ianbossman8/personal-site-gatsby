import styled from 'styled-components'

export const Divider = styled.div`
  border-bottom: ${({ theme: { colours } }) => `0.0625rem solid ${colours.info[2]}`};
  margin: 0.75rem 0;
`
