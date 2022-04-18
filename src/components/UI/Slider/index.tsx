import React, { useCallback, useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import './style.css'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../../store/hooks'
import { changeSlider } from '../../../store/reducers/ui/uiSlice'

interface SliderProps {
  title: string
  initialMin: number
  initialMax: number
}

export const Slider: React.FC<SliderProps> = ({ title }) => {
  const dispatch = useDispatch()
  // const initialMin = useAppSelector((store) => store.ui.from)
  // const initialMax = useAppSelector((store) => store.ui.to)
  const initialMin = 0
  const initialMax = 150
  const [minVal, setMinVal] = useState(initialMin)
  const [maxVal, setMaxVal] = useState(initialMax)
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const range = useRef<HTMLDivElement>(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - initialMin) / (initialMax - initialMin)) * 100),
    [initialMax, initialMin]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value) // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes

  return (
    <div className='container'>
      <div className='container-value'>
        <div className='slider__title'>{title}</div>
        <div className='slider__value'>{`${minVal * 100}₽ - ${maxVal * 100}₽`}</div>
      </div>
      <div className='container-range'>
        <input
          type='range'
          min={initialMin}
          max={initialMax}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1)
            setMinVal(value)
            dispatch(changeSlider({ key: 'from', value: value }))
            event.target.value = value.toString()
          }}
          className={classnames('thumb thumb--zindex-3', {
            'thumb--zindex-5': minVal > initialMax - 100,
          })}
        />
        <input
          type='range'
          min={initialMin}
          max={initialMax}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1)
            setMaxVal(value)
            dispatch(changeSlider({ key: 'to', value: value }))
            event.target.value = value.toString()
          }}
          className='thumb thumb--zindex-4'
        />
        <div className='slider'>
          <div className='slider__track' />
          <div ref={range} className='slider__range' />
        </div>
      </div>
    </div>
  )
}
