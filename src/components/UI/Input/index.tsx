import React from 'react'

import { Arrow, ArrowEmail, ErrorMessage, InputContainer, InputField, Title, Wrapper } from './style'

interface InputProps {
  width?: string
  type?: string
  margin?: string
  title?: string
  error?: string
  onClick?: () => void
  styled?: 'date' | 'email'
  placeholder?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ width = '320px', type = 'text', margin, title, error, onClick, styled, placeholder }, ref) => {
    return (
      <InputContainer width={width} margin={margin}>
        <Title title={title}>{title}</Title>
        <Wrapper>
          <InputField type={type} placeholder={placeholder} error={error} styled={styled} ref={ref} />
          <ErrorMessage error={error}>{error}</ErrorMessage>
          <Arrow styled={styled} onClick={onClick} />
          <ArrowEmail styled={styled} onClick={onClick} />
        </Wrapper>
      </InputContainer>
    )
  }
)
