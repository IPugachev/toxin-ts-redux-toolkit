import React, { useState } from 'react'
import { ReactComponent as LikeIconColored } from '../../../assets/icons/like-btn-clicked.svg'
import { ReactComponent as LikeIconGray } from '../../../assets/icons/like-btn-unclicked.svg'
import { LikeCount, LikeWrapper } from './styles'

const likes = 12
const LikeButton: React.FC = () => {
  const [active, setActive] = useState(false)

  return (
    <LikeWrapper active={active} onClick={() => setActive(!active)}>
      {active ? <LikeIconColored /> : <LikeIconGray />}
      <LikeCount active={active}>{likes}</LikeCount>
    </LikeWrapper>
  )
}

export default LikeButton
