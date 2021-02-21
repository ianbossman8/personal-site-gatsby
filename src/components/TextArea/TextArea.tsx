import React from 'react'
import { ErrorText } from '../Input/styles'
import { TextBox, TextInputContainer } from './styles'

interface Props {
  name: string
  handleChange: (e: React.ChangeEvent<any>) => void
  value: string | number
  error: string | number | undefined
  required?: boolean
}

export default function TextArea(props: Props) {
  const { name, handleChange, value, error } = props

  return (
    <TextInputContainer>
      <label htmlFor={name}>{name}</label>
      <TextBox
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={`enter your ${name}`}
      />
      <ErrorText>{error}</ErrorText>
    </TextInputContainer>
  )
}
