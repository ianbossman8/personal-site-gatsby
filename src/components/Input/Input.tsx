import React from 'react'
import { ErrorText, InputBox, InputContainer } from './styles'

interface Props {
  type: string
  name: string
  handleChange: (e: React.ChangeEvent<any>) => void
  value: string | number
  error: string | number | undefined
  required?: boolean
}

export default function Input(props: Props) {
  const { type, name, handleChange, value, error, required = false } = props

  return (
    <InputContainer>
      <label htmlFor={name}>
        {name}
        {required && '(required)'}
      </label>
      <InputBox type={type} name={name} onChange={handleChange} value={value} />
      <ErrorText>{error}</ErrorText>
    </InputContainer>
  )
}
