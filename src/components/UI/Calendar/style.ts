import styled from 'styled-components'

import { Theme } from '../../../styles/global'

interface StyleProps {
  margin?: string
  theme?: Theme
  visible?: boolean
  filtered?: boolean
}

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`
export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CalendarWrapper = styled.div<StyleProps>`
  margin-top: 5px;
  position: relative;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transition: opacity 0.2s linear;
`

export const CalendarContainer = styled.div<StyleProps>`
  position: absolute;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  font-weight: 400;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.purple};
  box-shadow: 0px 10px 20px 0px #1f20410d;
  background-color: #ffffff;
  z-index: 10;
  user-select: none;
`

export const Button = styled.span`
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
`
