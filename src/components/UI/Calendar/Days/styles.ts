import styled from 'styled-components'

export const DaysContainer = styled.div<{ filtered: boolean }>`
  font-size: 12px;
  line-height: ${({ filtered }) => (filtered ? '32px' : '40px')};
  font-style: normal;
  font-weight: 700;
  justify-content: space-around;
  display: flex;
`
