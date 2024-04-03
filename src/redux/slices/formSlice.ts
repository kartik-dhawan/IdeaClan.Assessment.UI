import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { JobsStateType } from "../interfaces"

const initialState: JobsStateType = {
  jobs: [],
  isLoading: false,
  isError: false,
}

const formSlice = createSlice({
  name: "Jobs",
  initialState,
  reducers: {
    addJobRecords: (state: JobsStateType, action: PayloadAction<any[]>) => {
      state.jobs = [...state.jobs, ...action.payload]
    },
    deleteAJobRecord: (state: JobsStateType, action: PayloadAction<string>) => {
      state.jobs = state.jobs.filter((item) => item.job_id !== action.payload)
    },
    resetJobsState: (state: JobsStateType) => {
      state.jobs = []
      state.isError = false
      state.isLoading = false
    },
  },
})

export const { addJobRecords, resetJobsState, deleteAJobRecord } =
  formSlice.actions
export default formSlice.reducer
