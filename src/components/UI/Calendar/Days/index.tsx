import { addDays, format, startOfWeek } from 'date-fns'
import { ru } from 'date-fns/locale'
import React from 'react'
import { DaysContainer } from './styles'

interface DaysProps {
  currentMonth: Date
  filtered: boolean
}

export const Days: React.FC<DaysProps> = ({ currentMonth, filtered }) => {
  const renderDays = () => {
    const dateFormat = 'EEEEEE'
    const days = []
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 })

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: ru }).charAt(0).toUpperCase() +
            format(addDays(startDate, i), dateFormat, { locale: ru }).charAt(1)}
        </div>
      )
    }
    return <DaysContainer filtered={filtered}>{days}</DaysContainer>
  }

  return <>{renderDays()}</>
}