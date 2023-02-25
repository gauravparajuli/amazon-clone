import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            if (state.darkMode) {
                state.darkMode = false
            } else {
                state.darkMode = true
            }
        },
    },
})

export default appSlice.reducer
export const { toggleDarkMode } = appSlice.actions
