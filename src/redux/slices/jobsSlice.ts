import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { JobsStateType } from "../interfaces"

const initialState: JobsStateType = {
  jobs: [],
  isLoading: false,
  isError: false,
}

// redux thunk to directly fetch data using API asynchronously & store it in redux
export const fetchAllJobs = createAsyncThunk(
  "users/fetchByIdStatus",
  async (options: any) => {
    const response = await axios.request(options)
    return response.data.data
  },
)

const jobsSlice = createSlice({
  name: "Jobs",
  initialState,
  reducers: {
    // adds a job record to redux (only for local, does not save data to local storage or API)
    addJobRecords: (state: JobsStateType, action: PayloadAction<any[]>) => {
      state.jobs = [...state.jobs, ...action.payload]
    },

    // adds a job record from redux only (does not affect API)
    deleteAJobRecord: (state: JobsStateType, action: PayloadAction<string>) => {
      state.jobs = state.jobs.filter((item) => item.job_id !== action.payload)
    },

    // resets redux job state
    resetJobsState: (state: JobsStateType) => {
      state.jobs = []
      state.isError = false
      state.isLoading = false
    },

    // updates a specific job record
    updateARecord: (state: JobsStateType, action: PayloadAction<any>) => {
      // selects the job from array which has to be updated
      const selectedJob = state.jobs.find(
        (item) => item.job_id === action.payload.job_id,
      )

      // updates the required fields
      const editedJob = {
        ...selectedJob,
        ...action.payload,
      }

      // gets the rest of the records
      const mutatedState = state.jobs.filter(
        (item) => item.job_id !== action.payload.job_id,
      )

      // merges with the edited one to return complete array
      state.jobs = [...mutatedState, editedJob]
    },
  },
  extraReducers: (builder) => {
    // reducers success case of API request
    builder.addCase(
      fetchAllJobs.fulfilled,
      (state: JobsStateType, action: PayloadAction<any>) => {
        // Add user to the state array
        state.jobs = action.payload
        state.isLoading = false
      },
    )

    // reducers pending case of API request
    builder.addCase(fetchAllJobs.pending, (state: JobsStateType) => {
      state.isLoading = true
    })

    // reducers error case of API request
    builder.addCase(fetchAllJobs.rejected, (state: JobsStateType) => {
      state.isLoading = false
      state.isError = true
    })
  },
})

export const {
  addJobRecords,
  resetJobsState,
  deleteAJobRecord,
  updateARecord,
} = jobsSlice.actions
export default jobsSlice.reducer
