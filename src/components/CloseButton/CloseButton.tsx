import React from 'react'
import { CloseButtonContainer } from './styles'

interface Props {
  handleModalClose: () => void
}

function CloseButton(props: Props) {
  return (
    <CloseButtonContainer onClick={props.handleModalClose}>
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        transform="rotate(45)">
        <path
          fillRule="evenodd"
          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
        />
      </svg>
    </CloseButtonContainer>
  )
}

export default CloseButton
