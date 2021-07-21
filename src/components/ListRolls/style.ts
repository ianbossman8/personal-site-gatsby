import styled from 'styled-components'
import { P } from '../../styles/text'

export const BottomInfoBox = styled.div`
  span {
    margin: 0 0.25rem 0 0;
    text-align: right;
  }
`

export const InfoBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;

  ${P} {
    margin-top: 0;
    padding-bottom: 0.25rem;
    text-align: left;
  }
`

export const ItemContainer = styled.li`
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { colours } }) => colours.primary.blur.light};
    box-shadow: 0px 1px 20px 0px ${({ theme: { colours } }) => colours.secondary.blur.light} inset;
    transition: all 0.1s ease-out;
  }

  a {
    display: flex;
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    min-width: 5rem;
    width: 5rem;
    min-height: 5rem;
    height: 5rem;
    border-radius: 50%;
    align-self: center;
  }
`

export const ListRollsContainer = styled.ul`
  padding: 0;
  list-style: none;
`
