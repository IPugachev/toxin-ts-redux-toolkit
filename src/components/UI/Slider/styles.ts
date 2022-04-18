import styled from 'styled-components'

export const SliderContainer = styled.div`
  margin-bottom: 9px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ContainerValue = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: rgba(31, 32, 65, 0.5);
`
export const SliderTitle = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #1f2041;
`
export const SliderValue = styled.span`
  font-size: 12px;
  line-height: 15px;
  color: rgba(31, 32, 65, 0.5);
`
export const ContainerRange = styled.div`
  position: relative;
`
export const Thumb = styled.input`
  pointer-events: none;
  position: absolute;
  top: 1px;
  height: 0;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
    border: 2px solid #ffffff;
    border-radius: 50%;
    cursor: pointer;
    height: 12px;
    width: 12px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
  &::-moz-range-thumb {
    background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
    border: 2px solid #ffffff;
    border-radius: 50%;
    cursor: pointer;
    height: 12px;
    width: 12px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`
