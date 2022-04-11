import { isSameDay, isSameMonth } from 'date-fns'

const dayComp = (day: Date | null) => {
  return day && (day > new Date() || isSameDay(day, new Date()))
}

export const cellBgFilter = (day: Date, endDate: number, entryDate: number) => {
  if (!dayComp(day)) return 'unable'
  if (endDate !== null && isSameDay(day, entryDate) && entryDate < endDate) {
    return 'selected-start'
  } else if (isSameDay(day, endDate) && entryDate < endDate) {
    return 'selected-end'
  } else if (day.getTime() > entryDate && day.getTime() < endDate) {
    return 'selected'
  }
  return ''
}
export const cellFilter = (day: Date, monthStart: Date, endDate: number, entryDate: number) => {
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
