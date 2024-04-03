import { configureStore } from "@reduxjs/toolkit"
import jobsSlice from "./slices/jobsSlice"

const store = configureStore({
  reducer: {
    jobsSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
