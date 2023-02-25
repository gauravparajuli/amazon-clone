import appSlice from './app'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        app: appSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store
