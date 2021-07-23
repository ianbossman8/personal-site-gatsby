import styled from 'styled-components'
import { MEDIA_QUERY_SMALL_WIDTH_RULE, MEDIA_QUERY_MEDIUM_WIDTH_RULE } from '../../constants/styles'
import { P, H4 } from '../../styles/text'
import { SIZE } from '../../constants/font'

export const CardContainer = styled.div`
  width: 26rem;
  max-width: 28rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 7fr 1fr;
  padding-left: 0.375rem;
  border-radius: 0.5rem;
  background-color: ${({ theme: { colours } }) => colours.primary[1]};
  box-shadow: ${({ theme: { colours } }) =>
    `0 0.0625rem 0.25rem 0 ${colours.secondary.blur.light}`};
  letter-spacing: 0;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;

  ${H4} {
    width: max-content;
    border-bottom: ${({ theme: { colours } }) => `0.125rem solid ${colours.info[2]}`};
    margin-bottom: 2rem;
    padding-top: 0.375rem;
  }

  ${P} {
    margin: 0;
    line-height: 1.375rem;
  }

  span {
    font-weight: ${({
      theme: {
        font: { weight }
      }
    }) => weight[SIZE.S]};
  }

  &:hover {
    box-shadow: ${({ theme: { colours } }) => `0 0.5rem 1rem 0 ${colours.secondary.blur.light}`};
    transform: translateY(-0.5rem);
  }

  ${MEDIA_QUERY_MEDIUM_WIDTH_RULE} {
    width: 28rem;
    max-width: 30rem;
  }

  ${MEDIA_QUERY_SMALL_WIDTH_RULE} {
    width: inherit;
    max-width: inherit;
    margin: 0;
  }
`

export const LeftDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-right: 0.5rem;

  ${P} {
    margin-left: 0.25rem;

    &:last-child {
      position: absolute;
      bottom: 0;
      font-weight: ${({
        theme: {
          font: { weight }
        }
      }) => weight[SIZE.L]};
    }
  }
`

export const RightDiv = styled.div`
  box-sizing: border-box;
  text-align: right;

  ${P}:first-child {
    line-height: 1.5rem;
    padding-top: 0.375rem;
    padding-right: 0.375rem;
    margin-bottom: 0.25rem;
    text-align: center;
    background-color: ${({ theme: { colours } }) => colours.info[2]};
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0.625rem 100%);
    font-weight: ${({
      theme: {
        font: { weight }
      }
    }) => weight[SIZE.L]};
    border-top-right-radius: 0.5rem;
  }

  div:last-child {
    float: left;
    margin-left: 0.5rem;
  }
`

export const BottomDiv = styled.div`
  grid-column: 1 / 3;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-end;

  span:first-child {
    flex-grow: 1;
    padding-left: 0.25rem;
  }

  ${P} {
    width: max-content;
    padding: 0 0.75rem;
    line-height: 1.5rem;
    background-color: ${({ theme: { colours } }) => colours.info[2]};
    clip-path: polygon(0.625rem 0%, 100% 0%, 100% 100%, 0% 100%);
    text-align: center;
    font-weight: ${({
      theme: {
        font: { weight }
      }
    }) => weight[SIZE.L]};
    border-bottom-right-radius: 0.5rem;
  }
`
