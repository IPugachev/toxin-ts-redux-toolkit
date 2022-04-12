import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 120px;
`
export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  width: 114px;
  height: 114px;
  z-index: 1;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.purple};
  & span {
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
  }
`
export const Box = styled.div<{ values: number[] }>`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  background: conic-gradient(
    ${({ values }) =>
        values[0] !== 0 &&
        '#919191 0deg ' +
          values[0] / 2 +
          'deg,#3D4975 ' +
          (values[0] - 3) +
          'deg, white ' +
          (values[0] - 3) +
          'deg ' +
          values[0] +
          'deg,'}
      ${({ values }) =>
        values[1] !== 0 &&
        '#BC9CFF ' +
          values[0] +
          'deg ' +
          (values[0] + values[1] / 2) +
          'deg,#8BA4F9 ' +
          (values[0] + values[1] - 3) +
          'deg, white ' +
          (values[0] + values[1] - 3) +
          'deg ' +
          (values[0] + values[1]) +
          'deg,'}
      ${({ values }) =>
        values[2] !== 0 &&
        '#6FCF97 ' +
          (values[0] + values[1]) +
          'deg ' +
          (values[0] + values[1] + values[2] / 2) +
          'deg,#66D2EA ' +
          (values[0] + values[1] + values[2] - 3) +
          'deg, white ' +
          (values[0] + values[1] + values[2] - 3) +
          'deg ' +
          (values[0] + values[1] + values[2]) +
          'deg,'}
      ${({ values }) =>
        values[3] !== 0 &&
        '#FFE39C ' +
          (values[0] + values[1] + values[2]) +
          'deg ' +
          (values[0] + values[1] + values[2] + values[3] / 2) +
          'deg,#FFBA9C ' +
          (values[0] + values[1] + values[2] + values[3] - 3) +
          'deg, white ' +
          (values[0] + values[1] + values[2] + values[3] - 3) +
          'deg ' +
          (values[0] + values[1] + values[2] + values[3]) +
          'deg'}
  );
`
export const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: fit-content;
  margin-left: 144px;
`

export const GreatReviews = styled.div`
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkShade75};
  & div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    background: linear-gradient(180deg, #ffe39c 0%, #ffba9c 100%);
  }
`
export const GoodReviews = styled(GreatReviews)`
  & div {
    background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  }
`
export const AlrightReviews = styled(GreatReviews)`
  & div {
    background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  }
`
export const BadReviews = styled(GreatReviews)`
  & div {
    background: linear-gradient(180deg, #919191 0%, #3d4975 100%);
  }
`
