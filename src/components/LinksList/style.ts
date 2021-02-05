import styled from 'styled-components'

export const LinksListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  a {
    text-decoration: none;
    color: ${({ theme: { colours } }) => colours.info[2]};

    span {
      max-width: 20px;
      margin-right: 0.5rem;
    }
  }
`
