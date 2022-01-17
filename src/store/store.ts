import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/appSlice'
import counterReducer from './reducers/counterSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>