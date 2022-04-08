import styled from 'styled-components'
import { ReactComponent as Sub } from '../../../assets/icons/dec-btn.svg'
import { ReactComponent as Add } from '../../../assets/icons/inc-btn.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-down.svg'
import { Theme } from '../../../styles/global'

interface StyleProps {
  margin?: string
  visible?: boolean
  theme?: Theme
  opacity?: string
}

export const DropdownContainer = styled.div<StyleProps>`
  width: 100%;
  white-space: nowrap;
  position: relative;
  margin: ${({ margin }) => margin};
`
export const DropdownTitle = styled.div<StyleProps>`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 5px;
`
export const InitialOption = styled.div<StyleProps>`
  display: flex;
  border: 1px solid ${({ visible, theme }) => (visible ? theme.colors.darkShade50 : theme.colors.darkShade25)};
  border-radius: ${({ visible }) => (visible ? '4px 4px 0 0' : '4px')};
  padding: 0 0 0 15px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.darkShade75};
  font-weight: 400;
  justify-content: space-between;
  align-items: center;
  height: 44px;
`

export const OptionsContainer = styled.div<StyleProps>`
  z-index: 5;
  display: block;
  width: 100%;
  position: absolute;
  flex-direction: column;
  box-shadow: 0px 10px 20px 0px #1f20410d;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s linear;
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  border: 1px solid ${({ theme }) => theme.colors.darkShade50};
  border-top-style: none;
  border-radius: 0 0 4px 4px;
  background-color: #ffffff;
`

export const Option = styled.div<StyleProps>`
  height: 40px;
  padding: 0 7px 0 15px;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const OptionSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92px;
  user-select: none;
`

export const SubButton = styled(Sub)<StyleProps>`
  opacity: ${({ opacity }) => opacity || '0.2'};
  width: 30px;
  height: 30px;
  cursor: pointer;
`
export const AddButton = styled(Add)`
  cursor: pointer;
`
export const Arrow = styled(ArrowIcon)`
  cursor: pointer;
`
export const ClearButton = styled.span<StyleProps>`
  color: ${({ theme }) => theme.colors.purple};
  pointer-events: ${({ visible }) => (visible ? 'none' : 'auto')};
  opacity: ${({ visible }) => (visible ? 0 : 1)};
  cursor: pointer;
  user-select: none;
  text-transform: uppercase;
`
export const SubmitButton = styled.span<StyleProps>`
  color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  user-select: none;
  text-transform: uppercase;
`
