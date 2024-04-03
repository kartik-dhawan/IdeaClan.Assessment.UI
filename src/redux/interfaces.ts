import store from "./store"

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Jobs Slice States
export interface JobsStateType {
  jobs: any[] // used any because the data was huge & was returned from an external API
  isLoading: boolean
  isError: boolean
}
