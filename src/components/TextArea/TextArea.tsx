import React from 'react'
import { P } from '../../styles/text'
import { ErrorText } from '../Input/styles'
import { TextBox, TextInputContainer } from './styles'

interface Props {
  name: string
  handleChange: (e: React.ChangeEvent<any>) => void
  value: string
  error: string | undefined
  disabled: boolean
  required?: boolean
}

const WORD_LIMIT = 75

export default React.memo(function TextArea(props: Props) {
  const { name, handleChange, value, error, disabled } = props

  const wordsRemain = WORD_LIMIT - value.length

  return (
    <TextInputContainer>
      <label htmlFor={name}>{name}</label>
      <TextBox
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={`enter your ${name}`}
        error={error}
        disabled={disabled}
      />
      {error ? <ErrorText>{error}</ErrorText> : <P>{`words remaining ${wordsRemain}`}</P>}
    </TextInputContainer>
  )
})
