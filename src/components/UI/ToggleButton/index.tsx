import React from 'react'
import { Input, Label, Slider, Title, ToggleContainer, Wrapper } from './styles'

interface ToggleProps {
  margin?: string
  title: string
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(({ margin = '0', title }, ref) => {
  return (
    <ToggleContainer margin={margin}>
      <Title title={title}>
        <span>{title}</span>
      </Title>
      <Wrapper>
        <Label>
          <Input ref={ref} type='checkbox' />
          <Slider />
        </Label>
        <span>Получать спецпредложения</span>
      </Wrapper>
    </ToggleContainer>
  )
})
