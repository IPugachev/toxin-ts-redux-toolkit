import React, { useState, useRef } from 'react'
import { addMonths, subMonths } from 'date-fns'

import { Input } from '../Input'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { Cells } from './Cells'
import { Days } from './Days'
import { Info } from './Info'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeEndDate, changeEntryDate } from '../../../features/ui/uiSlice'
import { UseCalendarClick } from './hook'
import { Button, CalendarBox, CalendarContainer, CalendarWrapper, SectionWrapper } from './styles'

interface CalendarProps {
  start?: string
  end?: string
  filtered?: boolean
}

export const Calendar: React.FC<CalendarProps> = ({ start, end, filtered = false }) => {
  const { entryDate } = useAppSelector((store) => store.ui)
  const { endDate } = useAppSelector((store) => store.ui)
  const [visible, setVisible] = useState(false)
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

  const entryInputRef = useRef<HTMLInputElement>(null)
  const endInputRef = useRef<HTMLInputElement>(null)

  const onDateClick = UseCalendarClick({ entryInputRef, endInputRef, filtered, entryDate })

  const handleInputClear = () => {
    dispatch(changeEntryDate(null))
    dispatch(changeEndDate(null))
    entryInputRef.current!.value = ''
    if (endInputRef.current) {
      endInputRef.current!.value = ''
    }
  }

  return (
    <CalendarBox ref={clickRef}>
      {filtered ? (
        <Input
          width='100%'
          placeholder='Выберите даты'
          styled='date'
          ref={entryInputRef}
          onClick={() => setVisible(!visible)}
          title={start}
        />
      ) : (
        <SectionWrapper>
          <Input
            width='150px'
            placeholder='ДД.ММ.ГГГГ'
            styled='date'
            ref={entryInputRef}
            onClick={() => setVisible((prev) => !prev)}
            title={start}
          />
          <Input
            width='150px'
            placeholder='ДД.ММ.ГГГГ'
            styled='date'
            ref={endInputRef}
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
