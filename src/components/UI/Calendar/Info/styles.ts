import styled from 'styled-components'
import { Theme } from '../../../../styles/global'
import { ReactComponent as ArrowBack } from '../../../../assets/icons/arrow-back.svg'
import { ReactComponent as ArrowForward } from '../../../../assets/icons/arrow-forward.svg'

export const Col = styled.div`
  display: flex;
`
export const Row = styled.div<{ theme: Theme }>`
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
export const ArrowB = styled(ArrowBack)`
  cursor: pointer;
`
export const ArrowF = styled(ArrowForward)`
  cursor: pointer;
`
