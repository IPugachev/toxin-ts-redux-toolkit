import React, { useState, useRef, useEffect } from 'react'
import { format, addMonths, subMonths } from 'date-fns'
import { Input } from '../Input'
import { ru } from 'date-fns/locale'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { Cells } from './Cells'
import { Days } from './Days'
import { Info } from './Info'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeEndDate, changeEntryDate } from '../../../features/ui/uiSlice'
import { Button, CalendarBox, CalendarContainer, CalendarWrapper, SectionWrapper } from './style'

interface CalendarProps {
  start?: string
  end?: string
  filtered?: boolean
}

const Calendar: React.FC<CalendarProps> = ({ start, end, filtered = false }) => {
  const { entryDate } = useAppSelector((store) => store.ui)
  const { endDate } = useAppSelector((store) => store.ui)
  const [visible, setVisible] = useState(true)
  const dispatch = useAppDispatch()
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const clickRef = useRef<HTMLDivElement>(null)
  useClickOutside(clickRef, () => setVisible(false))

  const fromRef = useRef<HTMLInputElement>(null)
  const untilRef = useRef<HTMLInputElement>(null)

  const onDateClick = (day: number) => {
    const defaultCurrentDateText = format(day, 'd.MM.yyyy')
    const currentDateTextForFiltered = format(day, 'd MMM', { locale: ru }).replace('.', '')

    if (entryDate === null) {
      dispatch(changeEntryDate(day))
      filtered
        ? (fromRef.current!.value = currentDateTextForFiltered)
        : (fromRef.current!.value = defaultCurrentDateText)
    } else if (day < entryDate) {
      dispatch(changeEntryDate(day))
      filtered
        ? (fromRef.current!.value = currentDateTextForFiltered)
        : (fromRef.current!.value = defaultCurrentDateText)
    } else {
      dispatch(changeEndDate(day))
      const entryDateTaxt = format(entryDate!, 'd MMM', { locale: ru }).replace('.', '')
      const endDateFilteredText = ` - ${format(day, 'd MMM', { locale: ru }).replace('.', '')}`
      filtered
        ? (fromRef.current!.value = entryDateTaxt + endDateFilteredText)
        : (untilRef.current!.value = defaultCurrentDateText)
    }
  }

  const handleInputClear = () => {
    dispatch(changeEntryDate(null))
    dispatch(changeEndDate(null))
    fromRef.current!.value = ''
    if (untilRef.current) {
      untilRef.current!.value = ''
    }
  }

  return (
    <CalendarBox ref={clickRef}>
      {filtered ? (
        <Input
          width='100%'
          placeholder='Выберите даты'
          styled='date'
          ref={fromRef}
          onClick={() => setVisible(!visible)}
          title={start}
        />
      ) : (
        <SectionWrapper>
          <Input
            width='150px'
            placeholder='ДД.ММ.ГГГГ'
            styled='date'
            ref={fromRef}
            onClick={() => setVisible((prev) => !prev)}
            title={start}
          />
          <Input
            width='150px'
            placeholder='ДД.ММ.ГГГГ'
            styled='date'
            ref={untilRef}
            onClick={() => setVisible((prev) => !prev)}
            title={end}
          />
        </SectionWrapper>
      )}
      <CalendarWrapper visible={visible}>
        <CalendarContainer>
          <Info nextMonth={nextMonth} prevMonth={prevMonth} currentMonth={currentMonth} />
          <Days currentMonth={currentMonth} />
          <Cells currentMonth={currentMonth} endDate={endDate!} entryDate={entryDate!} onClick={onDateClick} />
          <SectionWrapper>
            <Button
              onClick={() => {
                handleInputClear()
              }}>
              ОЧИСТИТЬ
            </Button>
            <Button onClick={() => setVisible(false)}>ПРИМЕНИТЬ</Button>
          </SectionWrapper>
        </CalendarContainer>
      </CalendarWrapper>
    </CalendarBox>
  )
}

export default Calendar
