import store from "./store"

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Jobs Slice

export type JobsBySource = {
  byAPI: any[]
  byUser: any[]
}

export interface JobsStateType {
  jobs: JobsBySource
  isLoading: boolean
  isError: boolean
}
