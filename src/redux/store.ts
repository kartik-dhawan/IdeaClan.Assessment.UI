import { configureStore } from "@reduxjs/toolkit"
import jobsSlice from "./slices/jobsSlice"

const store = configureStore({
  reducer: {
    jobsSlice,
  },
})

export default store
