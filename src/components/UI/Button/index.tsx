import React from 'react'
import { Arrow, ButtonContainer, ButtonText } from './styles'

interface ButtonProps {
  type?: 'button' | 'submit'
  buttonStyle?: 'white' | 'long'
  margin?: string
  width?: string
  onClick?: () => void
  hasArrow?: boolean
  text?: string
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  buttonStyle = 'white',
  margin,
  width,
  onClick,
  hasArrow,
  text,
}) => {
  return (
    <ButtonContainer type={type} buttonStyle={buttonStyle} margin={margin} width={width} onClick={onClick}>
      <ButtonText buttonStyle={buttonStyle}>{text}</ButtonText>
      {hasArrow && <Arrow />}
    </ButtonContainer>
  )
}
