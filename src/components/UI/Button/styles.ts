import styled, { css } from 'styled-components'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward-pagination.svg'
import { Theme } from '../../../styles/global'

interface StyleProps {
  margin?: string
  visible?: boolean
  buttonStyle?: 'white' | 'long'
  width?: string
  theme?: Theme
}

export const ButtonContainer = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: ${({ margin }) => margin};
  height: 44px;
  ${({ buttonStyle }) => (buttonStyle === 'long' ? 'width: 320px' : 'width: 99px')};
  ${({ width }) => width && 'width: ' + width};
  background: ${({ buttonStyle, theme }) => (buttonStyle === 'white' ? '#ffffff' : theme.background.purple)};
  border-radius: 22px;
  transition: 0.3s;
  text-decoration: none;
  border: none;
  cursor: pointer;
  &:hover {
    ${({ buttonStyle }) => (buttonStyle !== 'white' ? 'opacity:0.5' : 'border: 2px solid rgba(188, 156, 255, 0.5)')}
  }
  ${({ buttonStyle, theme }) => buttonStyle === 'white' && 'border: 2px solid ' + theme.colors.purple}
`
export const ButtonText = styled.p<StyleProps>`
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  ${({ buttonStyle }) => buttonStyle !== 'white' && 'color: #ffffff'};
  font-style: normal;
  font-weight: bold;

  ${({ buttonStyle }) =>
    buttonStyle === 'white' &&
    css`
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`
export const Arrow = styled(ArrowForward)`
  position: absolute;
  right: 0;
`
