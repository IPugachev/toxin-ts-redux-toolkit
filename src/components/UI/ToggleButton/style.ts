import styled from 'styled-components'

export const ToggleContainer = styled.div<{ margin: string }>`
  margin: ${({ margin }) => margin};
  width: fit-content;
`
export const Title = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: ${({ title }) => !title && 'none'};
`
export const Wrapper = styled.div`
  & span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.darkShade50};
  }
`
export const Label = styled.label`
  margin-right: 10px;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 10px;
  transition: 0.5s;
  &::before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 3px;
    bottom: 3.5px;
    background: linear-gradient(180deg, rgba(31, 32, 65, 0.25) 0%, rgba(31, 32, 65, 0.25) 100%);
    border-radius: 50%;
    transition: 0.3s;
  }
`
export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    border: 1px solid rgba(188, 156, 255, 1);
  }
  &:checked + ${Slider}::before {
    background: ${({ theme }) => theme.background.purple};
    transform: translateX(20px);
  }
`
