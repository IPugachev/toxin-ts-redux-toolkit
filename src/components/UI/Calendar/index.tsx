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
import { Button, CalendarBox, CalendarContainer, TitleContainer, Wrapper } from './style'

interface CalendarProps {
  start?: string
  end?: string
  filtered?: boolean
}

const Calendar: React.FC<CalendarProps> = ({ start, end, filtered = true }) => {
  const { entryDate } = useAppSelector((store) => store.ui)
  const { endDate } = useAppSelector((store) => store.ui)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const [fromStr, setFromStr] = useState('')
  const [untilStr, setUntilStr] = useState('')
  const [visible, setVisible] = useState(true)
  const fromRef = useRef<HTMLInputElement>(null)
  const untilRef = useRef<HTMLInputElement>(null)
  const clickRef = useRef<HTMLDivElement>(null)

  useClickOutside(clickRef, () => setVisible(false))
  const dispatch = useAppDispatch()

  // console.log('entryDate', entryDate)
  // console.log('endDate', endDate)

  // useEffect(() => {
  //   filtered &&
  //     (fromRef.current!.value = `${fromStr.substring(0, fromStr.length - 1)}${untilStr.substring(
  //       0,
  //       untilStr.length - 1
  //     )}`)
  //   if (entryDate !== null && endDate !== null) {
  //     filtered
  //       ? setFromStr(format(entryDate, 'd MMM', { locale: ru }))
  //       : (fromRef.current!.value = format(entryDate, 'd.MM.yyyy'))

  //     filtered
  //       ? setUntilStr(' - ' + format(endDate, 'd MMM', { locale: ru }))
  //       : (untilRef.current!.value = format(endDate, 'd.MM.yyyy'))
  //   }
  // }, [fromStr, untilStr])

  // const onDateClick = (day: number) => {
  //   console.log(fromRef.current, untilRef.current)

  //   if (entryDate === null) {
  //     dispatch(changeEntryDate(day))
  //     filtered ? setFromStr(format(day, 'd MMM', { locale: ru })) : (fromRef.current!.value = format(day, 'd.MM.yyyy'))
  //   } else if (day < entryDate) {
  //     dispatch(changeEntryDate(day))
  //     filtered ? setFromStr(format(day, 'd MMM', { locale: ru })) : (fromRef.current!.value = format(day, 'd.MM.yyyy'))
  //   } else {
  //     dispatch(changeEndDate(day))
  //     filtered
  //       ? setUntilStr(' - ' + format(day, 'd MMM', { locale: ru }))
  //       : (untilRef.current!.value = format(day, 'd.MM.yyyy'))
  //   }
  // }
  const onDateClick = (day: number) => {
    // console.log(fromRef.current, untilRef.current)
    const startFiltered = format(day, 'd MMM', { locale: ru })
    // console.log(startFiltered)
    const endFiltered = ` -  ${format(day, 'd MMM', { locale: ru })}`
    // console.log(endFiltered)
    const defaultDate = format(day, 'd.MM.yyyy')
    // console.log(defaultDate)
    if (entryDate === null) {
      dispatch(changeEntryDate(day))
      filtered
        ? (fromRef.current!.value = `${startFiltered.substring(0, startFiltered.length - 1)}${endFiltered.substring(
            0,
            endFiltered.length - 1
          )}`)
        : (fromRef.current!.value = defaultDate)
    } else if (day < entryDate) {
      console.log('day', day, 'entryDate', entryDate)

      dispatch(changeEntryDate(day))
      filtered
        ? (fromRef.current!.value = format(day, 'd MMM', { locale: ru }))
        : (fromRef.current!.value = defaultDate)
    } else {
      console.log('error')

      dispatch(changeEndDate(day))
      console.log(endFiltered)

      filtered ? (fromRef.current!.value = endFiltered) : (untilRef.current!.value = defaultDate)
    }
  }

  const handleInputClear = () => {
    dispatch(changeEntryDate(null))
    dispatch(changeEndDate(null))
    if (filtered) {
      setFromStr('')
      setUntilStr('')
      return
    }
    fromRef.current!.value = ''
    untilRef.current!.value = ''
  }

  return (
    <CalendarBox ref={clickRef}>
      <TitleContainer>
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
          <>
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
          </>
        )}
      </TitleContainer>

      <CalendarContainer visible={visible}>
        <Wrapper>
          <Info nextMonth={nextMonth} prevMonth={prevMonth} currentMonth={currentMonth} />
          <Days currentMonth={currentMonth} filtered={filtered} />
          <Cells
            currentMonth={currentMonth}
            filtered={filtered}
            endDate={endDate!}
            entryDate={entryDate!}
            onClick={onDateClick}
          />
          <TitleContainer style={{ margin: '20px 0' }}>
            <Button
              onClick={() => {
                handleInputClear()
              }}>
              ОЧИСТИТЬ
            </Button>
            <Button onClick={() => setVisible(false)}>ПРИМЕНИТЬ</Button>
          </TitleContainer>
        </Wrapper>
      </CalendarContainer>
    </CalendarBox>
  )
}

export default Calendar
