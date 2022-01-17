import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'appState',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    }
  },
})

export const { setLoading } = appSlice.actions

export default appSlice.reducer