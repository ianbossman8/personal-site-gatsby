import React from 'react'
import { ErrorText, InputBox, InputContainer } from './styles'

interface Props {
  type: string
  name: string
  handleChange: (e: React.ChangeEvent<any>) => void
  value: string | number
  error: string | undefined
  disabled: boolean
  required?: boolean
}

export default React.memo(function Input(props: Props) {
  const { type, name, handleChange, value, error, required = false, disabled } = props

  return (
    <InputContainer>
      <label htmlFor={name}>
        {name}
        {required && ' (required)'}
      </label>
      <InputBox
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        error={error}
        disabled={disabled}
      />
      <ErrorText>{error}</ErrorText>
    </InputContainer>
  )
})
