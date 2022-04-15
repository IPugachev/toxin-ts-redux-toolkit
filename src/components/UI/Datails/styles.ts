import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 88px;
  & div {
    margin-left: 10px;
  }
`
export const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkShade75};
`
export const Subtitle = styled(Title)`
  font-weight: 400;
`
