import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/appSlice'
import counterReducer from './reducers/counterSlice'

export default configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
  },
})