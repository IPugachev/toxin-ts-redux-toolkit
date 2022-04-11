import styled from 'styled-components'
import { ReactComponent as ArrowBack } from '../../../../assets/icons/arrow-back.svg'
import { ReactComponent as ArrowForward } from '../../../../assets/icons/arrow-forward.svg'

export const Row = styled.div`
  font-weight: bold;
  font-size: 19px;
  padding-bottom: 30px;
  line-height: 23px;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkShade100};
`
export const Col = styled.div`
  display: flex;
`

export const PrevMonthArrow = styled(ArrowBack)`
  cursor: pointer;
`
export const NextMonthArrow = styled(ArrowForward)`
  cursor: pointer;
`
