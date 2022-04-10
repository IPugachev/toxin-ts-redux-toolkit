import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import React, { useState } from 'react'
import { ArrowB, ArrowF, Col, Row } from './styles'

const months = [
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
  'Декабрь',
]

interface InfoProps {
  currentMonth: Date
  nextMonth: () => void
  prevMonth: () => void
}

export const Info: React.FC<InfoProps> = ({ currentMonth, nextMonth, prevMonth }) => {
  const renderHeader = () => {
    const dateFormat = 'yyyy'

    return (
      <Row>
        <Col style={{ justifySelf: 'flex-start' }} onClick={prevMonth}>
          <ArrowB />
        </Col>

        <Col>{months[Number(format(currentMonth, 'L'))] + ' ' + format(currentMonth, dateFormat, { locale: ru })}</Col>
        <Col style={{ justifySelf: 'flex-end' }} onClick={nextMonth}>
          <ArrowF />
        </Col>
      </Row>
    )
  }
  return <>{renderHeader()}</>
}
