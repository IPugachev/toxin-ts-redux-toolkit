import React, { useCallback, useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import './style.css'
import { useDispatch } from 'react-redux'
import { changeValues } from '../../../store/filter/action'

const Slider = ({ title, initialMin, initialMax }) => {
  const dispatch = useDispatch()

  const [minVal, setMinVal] = useState(initialMin.min)
  const [maxVal, setMaxVal] = useState(initialMax.max)
  const minValRef = useRef(null)
  const maxValRef = useRef(null)
  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - initialMin.min) / (initialMax.max - initialMin.min)) * 100),
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
          min={initialMin.min}
          max={initialMax.max}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1)
            setMinVal(value)
            dispatch(changeValues(initialMin.name, value))
            event.target.value = value.toString()
          }}
          className={classnames('thumb thumb--zindex-3', {
            'thumb--zindex-5': minVal > initialMax.max - 100,
          })}
        />
        <input
          type='range'
          min={initialMin.min}
          max={initialMax.max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1)
            setMaxVal(value)
            dispatch(changeValues(initialMax.name, value))
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

export default Slider
