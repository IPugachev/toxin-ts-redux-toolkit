import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import React from 'react'
import { Col, NextMonthArrow, PrevMonthArrow, Row } from './styles'

const months = [
  'Декабрь',
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июль',
  'Июнь',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
]

interface InfoProps {
  currentMonth: Date
  nextMonth: () => void
  prevMonth: () => void
}

export const Info: React.FC<InfoProps> = ({ currentMonth, nextMonth, prevMonth }) => {
  return (
    <Row>
      <Col onClick={prevMonth}>
        <PrevMonthArrow />
      </Col>
      <Col>{months[Number(format(currentMonth, 'L'))] + ' ' + format(currentMonth, 'yyyy', { locale: ru })}</Col>
      <Col onClick={nextMonth}>
        <NextMonthArrow />
      </Col>
    </Row>
  )
}
