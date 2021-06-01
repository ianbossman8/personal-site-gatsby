import React from 'react'
import { IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { GrClose } from 'react-icons/gr'
import { Message } from './styles'

interface Props {
  state?: string
  message?: string
  handleClose?: () => void
}

export interface MESSAGE_STATE {
  [key: string]: string
}

const MESSAGE_STATE: MESSAGE_STATE = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  INFO: 'INFO'
}

export default function MessageBox(props: Props) {
  const { state = MESSAGE_STATE.INFO, message } = props

  function handleCloseButton() {
    props.handleClose && props.handleClose()
  }

  const icons = {
    [MESSAGE_STATE.SUCCESS]: (
      <IoCheckmarkCircleOutline title="success" size={36} className="message-box--success-icon" />
    ),
    [MESSAGE_STATE.FAILED]: (
      <IoCloseCircleOutline title="failed" size={36} className="message-box--fail-icon" />
    )
  }

  return (
    <Message state={state} messageState={MESSAGE_STATE}>
      {icons[state]}
      {message}
      {state === MESSAGE_STATE.SUCCESS && (
        <GrClose
          onClick={handleCloseButton}
          size={16}
          className="message-box--close-button"
          title="Close Message Box"
        />
      )}
    </Message>
  )
}
