import React, { ChangeEvent, useState } from 'react'

import { ReactComponent as ArrowExpand } from '../../../assets/icons/expand-arrow.svg'
import { ReactComponent as ArrowClose } from '../../../assets/icons/close-arrow.svg'

import { CheckboxContainer, Input, InputContainer, Label, NameWrapper, Title, Wrapper } from './styles'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { changeCheckbox, UiState } from '../../../store/reducers/ui/uiSlice'

interface CheckboInterface {
  title: string
  subtitle?: string
  key: keyof UiState
}

interface CheckboxValuesInterface {
  default: CheckboInterface[]
  list: CheckboInterface[]
  rich: CheckboInterface[]
}

const checkboxValues: CheckboxValuesInterface = {
  default: [
    { title: 'Можно курить', key: 'smoking' },
    { title: 'Можно с питомцами', key: 'pets' },
    { title: 'Можно пригласить гостей (до 10 человек)', key: 'party' },
  ],
  list: [
    { title: 'Завтрак', key: 'breakfast' },
    { title: 'Письменный стол', key: 'table' },
    { title: 'Стул для кормления', key: 'babyChair' },
    { title: 'Кроватка', key: 'babyBed' },
    { title: 'Телевизор', key: 'tv' },
    { title: 'Шампунь', key: 'shampoo' },
  ],
  rich: [
    { title: 'Широкий коридор', subtitle: 'Ширина коридоров в номере не менее 91 см.', key: 'wideHall' },
    {
      title: 'Помощник для инвалидов',
      subtitle: 'На 1 этаже вас встретит специалист и проводит до номера.',
      key: 'invalidHelper',
    },
  ],
}

interface CheckboxProps {
  checkboxType: 'default' | 'list' | 'rich'
  margin?: string
  title?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ checkboxType, margin = '0', title }) => {
  const [listExpand, setListExpand] = useState(false)
  const handlerSwitch = () => {
    checkboxType === 'list' && setListExpand(!listExpand)
  }
  const dispatch = useAppDispatch()
  const reduxValues = useAppSelector((state) => state.ui)

  const setChackboxValue = (key: keyof UiState, event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCheckbox({ key, value: event.target.checked }))
  }

  return (
    <CheckboxContainer margin={margin}>
      <Title title={title} onClick={handlerSwitch} checkboxType={checkboxType}>
        {title}
        {checkboxType === 'list' && (listExpand ? <ArrowClose /> : <ArrowExpand />)}
      </Title>
      <InputContainer>
        <Wrapper visible={listExpand} checkboxType={checkboxType}>
          {checkboxValues[checkboxType].map((item) => (
            <div key={item.key}>
              <Input
                type='checkbox'
                defaultChecked={reduxValues[item.key] as boolean}
                id={item.title}
                onChange={(event) => setChackboxValue(item.key, event)}
              />
              <Label htmlFor={item.title}>
                <NameWrapper checkboxType={checkboxType}>
                  <p>{item.title}</p>
                  {checkboxType === 'rich' && <span>{item.subtitle}</span>}
                </NameWrapper>
              </Label>
            </div>
          ))}
        </Wrapper>
      </InputContainer>
    </CheckboxContainer>
  )
}
