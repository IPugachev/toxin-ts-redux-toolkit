import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import uiReducer from '../features/ui/uiSlice'
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    counter: counterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
