import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DropdownValues } from '../../../components/UI/Dropdown'

export interface UiState {
  entryDate: number | null
  endDate: number | null
  from: number
  to: number
  smoking: boolean
  pets: boolean
  party: boolean
  wideHall: boolean
  invalidHelper: boolean
  bedrooms: number
  breakfast: boolean
  table: boolean
  babyChair: boolean
  babyBed: boolean
  tv: boolean
  shampoo: boolean
  guests: DropdownValues[]
  rooms: DropdownValues[]
}

const initialState: UiState = {
  entryDate: null,
  endDate: null,
  from: 0,
  to: 150,
  smoking: false,
  pets: false,
  party: false,
  wideHall: false,
  invalidHelper: false,
  bedrooms: 0,
  breakfast: false,
  table: false,
  babyChair: false,
  babyBed: false,
  tv: false,
  shampoo: false,
  guests: [
    { name: 'взрослые', count: 0, key: 'guestsAdults' },
    { name: 'дети', count: 0, key: 'guestsKids' },
    { name: 'младенцы', count: 0, key: 'guestsBabies' },
  ],
  rooms: [
    { name: 'спальни', count: 0, key: 'bedrooms' },
    { name: 'кровати', count: 0, key: 'beds' },
    { name: 'ванные комнаты', count: 0, key: 'bathrooms' },
  ],
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeDropdown: (
      state,
      action: PayloadAction<{ dropdownType: 'guests' | 'rooms'; count: number; key: string }>
    ) => {
      let temp = state[action.payload.dropdownType].find((item) => item.key === action.payload.key)
      if (temp) {
        let index = state[action.payload.dropdownType].indexOf(temp)
        state[action.payload.dropdownType][index].count = action.payload.count
      }
    },
    clearDropdown: (state, action: PayloadAction<'guests' | 'rooms'>) => {
      state[action.payload] = state[action.payload].map((item) => {
        item.count = 0
        return { ...item }
      })
    },
    subDropdown: (state, action: PayloadAction<{ dropdownType: 'guests' | 'rooms'; key: string }>) => {
      let temp = state[action.payload.dropdownType].find((item) => item.key === action.payload.key)
      if (temp) {
        let index = state[action.payload.dropdownType].indexOf(temp)
        if (state[action.payload.dropdownType][index].count) {
          state[action.payload.dropdownType][index].count -= 1
        }
      }
    },
    addDropdown: (state, action: PayloadAction<{ dropdownType: 'guests' | 'rooms'; key: string }>) => {
      let temp = state[action.payload.dropdownType].find((item) => item.key === action.payload.key)
      if (temp) {
        let index = state[action.payload.dropdownType].indexOf(temp)
        state[action.payload.dropdownType][index].count += 1
      }
    },
    changeEntryDate: (state, action: PayloadAction<number | null>) => {
      state.entryDate = action.payload
    },
    changeEndDate: (state, action: PayloadAction<number | null>) => {
      state.endDate = action.payload
    },
    changeSlider: (state, action: PayloadAction<{ key: 'from' | 'to'; value: number }>) => {
      state[action.payload.key] = action.payload.value
      return { ...state }
    },
  },
})
// export const selectUi = (state: RootState) => state.ui
export const { changeDropdown, clearDropdown, subDropdown, addDropdown, changeEntryDate, changeEndDate, changeSlider } =
  uiSlice.actions
export default uiSlice.reducer
