import styled from 'styled-components'

export const LikeWrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ active }) => (active ? '#BC9CFF' : 'rgba(31, 32, 65, 0.25)')};
  width: 40px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`

export const LikeCount = styled.div<{ active: boolean }>`
  font-size: 10px;
  line-height: 12px;
  color: ${({ active }) => (active ? '#BC9CFF' : 'rgba(31, 32, 65, 0.25)')};
`
