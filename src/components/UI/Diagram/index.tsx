import React from 'react'

import { AlrightReviews, BadReviews, Box, Container, GoodReviews, GreatReviews, Info, Wrapper } from './styles'
import { getDiargamPercents } from './utils'

interface DiagramProps {
  greatReviews: number
  goodReviews: number
  alrightReviews: number
  badReviews: number
}

export const Diagram: React.FC<DiagramProps> = ({ greatReviews, goodReviews, alrightReviews, badReviews }) => {
  const sum = greatReviews + goodReviews + alrightReviews + badReviews
  const reviewsArray = [greatReviews, goodReviews, alrightReviews, badReviews]

  const [great, good, alright, bad] = getDiargamPercents(reviewsArray)

  return (
    <Container>
      <Wrapper>
        <p>{sum}</p>
        <span>голосов</span>
      </Wrapper>
      <Box values={[bad, alright, good, great]} />
      <Info>
        <GreatReviews>
          <div />
          <p>Великолепно</p>
        </GreatReviews>
        <GoodReviews>
          <div />
          <p>Хорошо</p>
        </GoodReviews>
        <AlrightReviews>
          <div />
          <p>Удовлетворительно</p>
        </AlrightReviews>
        <BadReviews>
          <div />
          <p>Разочарован</p>
        </BadReviews>
      </Info>
    </Container>
  )
}
