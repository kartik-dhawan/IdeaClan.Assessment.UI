import store from "./store"

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Jobs Slice

export interface JobsStateType {
  jobs: any[]
  isLoading: boolean
  isError: boolean
}
