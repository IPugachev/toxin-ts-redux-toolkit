import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns'
import React from 'react'
import { Cell, CellBgackground, CellsWrapper, Number, RowCells } from './styles'
import { cellBgFilter, cellFilter } from './utils'

interface CellsProps {
  currentMonth: Date
  entryDate: number
  endDate: number
  onClick: (day: number) => void
}

export const Cells: React.FC<CellsProps> = ({ currentMonth, entryDate, endDate, onClick }) => {
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startWeek = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endWeek = endOfWeek(monthEnd, { weekStartsOn: 1 })
    const dateFormat = 'd'
    const rows = []
    let days = []
    let day = startWeek
    let formattedDate = ''
    while (day <= endWeek) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat)
        const cloneDay = day.getTime()
        days.push(
          <CellBgackground key={day.getDate() + i} className={`${cellBgFilter(day, endDate, entryDate)}`}>
            <Cell className={`${cellFilter(day, monthStart, endDate, entryDate)}`} onClick={() => onClick(cloneDay)}>
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
  return <CellsWrapper>{renderCells()}</CellsWrapper>
}
