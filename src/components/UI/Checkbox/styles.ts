import styled from 'styled-components'
import Check from '../../../assets/icons/check.svg'

interface StylesProps {
  margin?: string
  checkboxType?: 'default' | 'list' | 'rich'
  visible?: boolean
}

export const CheckboxContainer = styled.div<StylesProps>`
  width: 256px;
  margin: ${({ margin }) => margin};
`
export const Title = styled.div<StylesProps>`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  display: ${({ title }) => (title && 'flex') || 'none'};
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
  cursor: ${({ checkboxType }) => (checkboxType === 'list' ? 'pointer' : 'default')};
`

export const InputContainer = styled.div`
  position: relative;
`
export const Wrapper = styled.div<StylesProps>`
  position: ${({ checkboxType }) => (checkboxType === 'list' ? 'absolute' : 'static')};
  top: 0;
  transition: opacity 0.2s linear;
  opacity: ${({ checkboxType, visible }) => (checkboxType === 'list' && !visible ? 0 : 1)};
  pointer-events: ${({ checkboxType, visible }) => (checkboxType === 'list' && !visible ? 'none' : 'auto')};
`
export const Label = styled.label`
  width: 225px;
  display: flex;
  align-items: flex-start;
  user-select: none;
  margin-bottom: 10px;
  cursor: pointer;
  &::before {
    margin-right: 10px;
    content: '';
    top: 0;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 4px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center;
  }
`
export const NameWrapper = styled.div<StylesProps>`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 18px;
  font-weight: ${({ checkboxType }) => (checkboxType === 'rich' ? 700 : 400)};
  color: ${({ theme }) => theme.colors.darkShade75};
  & p {
    white-space: nowrap;
  }
  & span {
    margin-top: 5px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkShade50};
  }
`

export const Input = styled.input`
  z-index: -1;
  opacity: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  &:checked + ${Label}::before {
    background-image: url(${Check});
    border: 1px solid rgba(188, 156, 255, 1);
  }
`
