import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import { useAppDispatch } from '../../../store/hooks'
import { changeEndDate, changeEntryDate } from '../../../store/reducers/ui/uiSlice'

interface CalendarClickProps {
  entryInputRef: React.RefObject<HTMLInputElement>
  endInputRef: React.RefObject<HTMLInputElement>
  filtered: boolean
  entryDate: number | null
}

export const UseCalendarClick = ({ entryInputRef, endInputRef, filtered, entryDate }: CalendarClickProps) => {
  const dispatch = useAppDispatch()

  const onDateClick = (day: number) => {
    const defaultCurrentDateText = format(day, 'd.MM.yyyy')
    const currentDateTextForFiltered = format(day, 'd MMM', { locale: ru }).replace('.', '')

    if (entryDate === null) {
      dispatch(changeEntryDate(day))
      filtered
        ? (entryInputRef.current!.value = currentDateTextForFiltered)
        : (entryInputRef.current!.value = defaultCurrentDateText)
    } else if (day < entryDate) {
      dispatch(changeEntryDate(day))
      filtered
        ? (entryInputRef.current!.value = currentDateTextForFiltered)
        : (entryInputRef.current!.value = defaultCurrentDateText)
    } else {
      dispatch(changeEndDate(day))
      const entryDateTaxt = format(entryDate!, 'd MMM', { locale: ru }).replace('.', '')
      const endDateFilteredText = ` - ${format(day, 'd MMM', { locale: ru }).replace('.', '')}`
      filtered
        ? (entryInputRef.current!.value = entryDateTaxt + endDateFilteredText)
        : (endInputRef.current!.value = defaultCurrentDateText)
    }
  }
  return onDateClick
}
