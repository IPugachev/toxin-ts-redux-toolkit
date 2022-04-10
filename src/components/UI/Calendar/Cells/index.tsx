import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, startOfMonth, startOfWeek } from 'date-fns'
import React from 'react'
import { Cell, CellBgackground, Number, RowCells } from './styles'

interface CellsProps {
  currentMonth: Date
  entryDate: number
  endDate: number
  onClick: (day: number) => void
  filtered: boolean
}

export const Cells: React.FC<CellsProps> = ({ currentMonth, entryDate, endDate, onClick }) => {
  const dayComp = (day: Date | null) => {
    return day && (day || isSameDay(day, new Date()))
  }

  const cellBgFilter = (day: Date) => {
    if (!dayComp(day)) return 'unable'
    if (endDate !== null && isSameDay(day, entryDate)) {
      return 'selected-start'
    } else if (isSameDay(day, endDate) && entryDate < endDate) {
      return 'selected-end'
    } else if (day.getTime() > entryDate && day.getTime() < endDate) {
      return 'selected'
    }
    return
  }
  const cellFilter = (day: Date, monthStart: Date) => {
    if (!dayComp(day)) return

    if (isSameDay(day, entryDate) || isSameDay(day, endDate)) {
      return 'selected'
    } else if (isSameDay(day, new Date())) {
      return 'default'
    } else if (!isSameMonth(day, monthStart)) {
      return 'disabled'
    }
    return
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })
    const dateFormat = 'd'
    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat)
        const cloneDay = day.getTime()
        days.push(
          <CellBgackground key={day.getDate() + i} className={`${cellBgFilter(day)}`}>
            <Cell className={`${cellFilter(day, monthStart)}`} onClick={() => onClick(cloneDay)}>
              <Number>{formattedDate}</Number>
            </Cell>
          </CellBgackground>
        )
        day = addDays(day, 1)
      }
      rows.push(<RowCells key={day.getDate()}>{days}</RowCells>)
      days = []
    }
    return rows
  }
  return <>{renderCells()}</>
}
