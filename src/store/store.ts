import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import tasksReducer from '../reducer/tasksSlice'
// import oneRaskReducer from '../reducer/oneTaskSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // oneTask: oneRaskReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
