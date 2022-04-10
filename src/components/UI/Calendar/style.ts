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
  position: relative;
  margin: 0 auto;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Days = styled.div<StyleProps>`
  font-size: 12px;
  line-height: ${({ filtered }) => (filtered ? '32px' : '40px')};
  font-style: normal;
  font-weight: 700;
  justify-content: space-around;
  display: flex;
`

export const Wrapper = styled.div`
  margin: 20px;
  user-select: none;
`
export const CalendarContainer = styled.div<StyleProps>`
  position: absolute;
  top: 70px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  font-weight: 400;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.purple};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s linear;
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  box-shadow: 0px 10px 20px 0px #1f20410d;
  background-color: #ffffff;
  z-index: 10;
`

export const Button = styled.span`
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
`
