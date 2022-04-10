import styled from 'styled-components'
import { Theme } from '../../../../styles/global'

interface StyleProps {
  theme?: Theme
  // filtered?: boolean
}

export const Cell = styled.div<StyleProps>`
  height: 100%;
  cursor: pointer;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.disabled {
    color: ${({ theme }) => theme.colors.darkShade25};
  }
  &.selected {
    background: ${({ theme }) => theme.background.purple};
    font-weight: 700;
    color: #ffffff;
  }
  &.default {
    background: ${({ theme }) => theme.background.green};
    color: #ffffff;
    font-weight: 700;
  }
`
export const CellBgackground = styled.div<StyleProps>`
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
  height: 100%;
  &.selected {
    background: ${({ theme }) => theme.background.purpleBackground};
  }
  &.selected-start {
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
    background: ${({ theme }) => theme.background.purpleBackground};
  }
  &.selected-end {
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    background: ${({ theme }) => theme.background.purpleBackground};
  }
  &.unable {
    pointer-events: none;
  }
`
export const Number = styled.div`
  font-size: 12px;
  line-height: 15px;
`
export const RowCells = styled.div<StyleProps>`
  margin: 0;
  padding: 0;
  display: flex;
  height: 40px;

  position: relative;
`
