import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { JobsStateType } from "../interfaces"

const initialState: JobsStateType = {
  jobs: {
    byAPI: [],
    byUser: [],
  },
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
    resetJobsState: (state: JobsStateType) => {
      state.jobs.byAPI = []
      state.isError = false
      state.isLoading = false
    },
  },
  extraReducers: (builder) => {
    // reducers success case of API request
    builder.addCase(
      fetchAllJobs.fulfilled,
      (state: JobsStateType, action: PayloadAction<any>) => {
        // Add user to the state array
        state.jobs.byAPI = action.payload
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

export const { resetJobsState } = jobsSlice.actions
export default jobsSlice.reducer
