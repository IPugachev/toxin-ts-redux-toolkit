import React, { useRef, useState } from 'react'
import { getTitleDropdownByCount } from './utils'
import {
  AddButton,
  Arrow,
  ClearButton,
  DropdownContainer,
  DropdownTitle,
  InitialOption,
  Option,
  OptionsContainer,
  OptionSection,
  SubButton,
  SubmitButton,
} from './styles'
import { addDropdown, clearDropdown, subDropdown } from '../../../features/ui/uiSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useClickOutside } from '../../../hooks/useClickOutside'

export interface DropdownValues {
  name: string
  count: number
  key: string
}

interface DropdownProps {
  dropdownType: 'guests' | 'rooms'
  title?: string
  margin?: string
}

export const Dropdown: React.FC<DropdownProps> = ({ dropdownType, title, margin }) => {
  console.log('Dropdown rendered')
  const initialValues = useAppSelector((store) => store.ui[dropdownType])

  const headerTitle = getTitleDropdownByCount(initialValues, dropdownType)

  const [visible, setVisible] = useState(false)

  const clickRef = useRef<HTMLDivElement>(null)

  useClickOutside(clickRef, () => setVisible(false))

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }
  const handleValue = initialValues.map((value) => value.count).every((count) => count === 0)

  const dispatch = useAppDispatch()

  return (
    <DropdownContainer ref={clickRef} margin={margin}>
      <DropdownTitle>{title}</DropdownTitle>
      <InitialOption visible={visible}>
        <span>{headerTitle}</span>
        <Arrow onClick={toggleVisible} />
      </InitialOption>
      <OptionsContainer visible={visible}>
        {initialValues.map((option, index) => (
          <Option key={index}>
            <OptionSection>{option.name.toUpperCase()}</OptionSection>
            <OptionSection>
              <SubButton
                opacity={option.count > 0 ? '1' : '0.2'}
                onClick={() => dispatch(subDropdown({ dropdownType, key: option.key }))}
              />
              {option.count}
              <AddButton onClick={() => dispatch(addDropdown({ dropdownType, key: option.key }))} />
            </OptionSection>
          </Option>
        ))}
        {dropdownType === 'guests' && (
          <Option>
            <ClearButton visible={handleValue} onClick={() => dispatch(clearDropdown(dropdownType))}>
              очистить
            </ClearButton>
            <SubmitButton onClick={() => toggleVisible()}>применить</SubmitButton>
          </Option>
        )}
      </OptionsContainer>
    </DropdownContainer>
  )
}
