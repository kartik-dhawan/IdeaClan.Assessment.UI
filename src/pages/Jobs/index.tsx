import { Box, CircularProgress, Fade, Stack, Typography } from "@mui/material"
import DataTable from "../../components/DataTable"
import { styles } from "./styles"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllJobs } from "../../redux/slices/jobsSlice"
import { Link } from "react-router-dom"
import PrimaryButton from "../../components/common/PrimaryButton"
import { JOBS_BY_API_MOCK } from "../../utils/constants"
import { AppDispatch, RootType } from "../../redux/interfaces"

export function Jobs() {
  const jid = "jobsPage"
  const dispatch = useDispatch<AppDispatch>()

  const [jobsData, setJobsData] = useState<any[]>([])

  const options = useMemo(() => {
    return {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: "React.js developer in Texas, USA",
        page: "1",
        num_pages: "1",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
      },
    }
  }, [])

  // fetches all jobs using API & stores it in redux
  const getJobs = useCallback(() => {
    dispatch(fetchAllJobs(options))
  }, [options, dispatch])

  useEffect(() => {
    try {
      getJobs()
    } catch (error) {
      console.error(error)
    }
  }, [])

  // get data, loading & error state from redux
  const { isLoading, isError, jobs } = useSelector(
    (state: RootType) => state.jobsSlice,
  )

  // use fallback constants data if the API fails
  useEffect(() => {
    if (isError) {
      setJobsData(JOBS_BY_API_MOCK)
    } else {
      setJobsData(jobs.byAPI)
    }
  }, [isError, jobs])

  return (
    <Stack sx={{ margin: "2rem 0rem 5rem" }} className={jid}>
      <Stack
        alignItems="center"
        sx={styles.jobsPageHeadingContainer}
        className={jid + "HeadingContainer"}
      >
        <Typography
          component="h1"
          sx={styles.jobsPageTitle}
          className={jid + "Title"}
        >
          Analyze the Jobs Better.
        </Typography>
        <Typography
          component="p"
          sx={styles.jobsPageSubTitleText}
          className={jid + "SubTitleText"}
        >
          Get data for top Jobs organized for you to start hiring right away.
          Get data for top Jobs organized for you to start hiring right away.Get
          data for top Jobs organized for you to start hiring right away.
        </Typography>
      </Stack>

      {/* display a loader before the API gets the result & thunk is in 'pending' state*/}
      <Fade in={isLoading}>
        <Stack alignItems="center">
          <CircularProgress sx={styles.jobsPageLoader} />
        </Stack>
      </Fade>

      {/* fade out loader & fade in the data table when we have a result */}
      <Fade in={!isLoading}>
        <Box
          sx={styles.jobsPageDataTableWrapper}
          className={jid + "DataTableWrapper"}
        >
          <DataTable jobsData={jobsData} />
        </Box>
      </Fade>

      {/* buttons to reset the redux state & refetch the data */}
      <Stack flexDirection="row" gap="1rem" sx={styles.jobsPageButtonGroup}>
        <PrimaryButton onClick={getJobs}>Refetch</PrimaryButton>
        <Link to="/">
          <PrimaryButton>Go Back</PrimaryButton>
        </Link>
      </Stack>

      {/* API Rate limit exceeding error UI */}
      {isError && (
        <Box sx={styles.jobsPageErrortext}>
          *The data currently being displayed is static as the rate limit for
          the free API has been exceeded.
        </Box>
      )}
    </Stack>
  )
}
