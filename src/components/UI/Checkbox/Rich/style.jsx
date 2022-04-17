import styled from 'styled-components'
import Check from '../../../../assets/icons/check.svg'

export const Checkbox = styled.div`
  width: 266px;
  margin: ${({ margin }) => margin || '0'};
`
export const Title = styled.div`
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
`

export const Label = styled.label`
  user-select: none;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  &::before {
    content: '';
    top: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
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
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.darkShade75};
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
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
