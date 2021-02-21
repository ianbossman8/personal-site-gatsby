import React from 'react'
import { ErrorText } from '../Input/styles'
import { TextBox, TextInputContainer } from './styles'

interface Props {
  name: string
  handleChange: (e: React.ChangeEvent<any>) => void
  value: string
  error: string | number | undefined
  required?: boolean
}

const WORD_LIMIT = 75

export default function TextArea(props: Props) {
  const { name, handleChange, value, error } = props

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
      />
      <ErrorText>{error || `words remaining ${wordsRemain}`}</ErrorText>
    </TextInputContainer>
  )
}
