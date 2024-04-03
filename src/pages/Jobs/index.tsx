import { Paper, Stack, Typography } from "@mui/material"
import DataTable from "../../components/DataTable"
import { styles } from "./styles"
import { useEffect } from "react"
import axios from "axios"

export function Jobs() {
  const jid = "jobsPage"

  const options = {
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

  useEffect(() => {
    try {
      axios.request(options).then((res) => {
        console.log(res.data.data)
      })
    } catch (error) {
      console.error(error)
    }
  }, [options])

  return (
    <Stack sx={{ margin: 0 }} className={jid}>
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
      <Paper
        sx={styles.jobsPageDataTableWrapper}
        className={jid + "DataTableWrapper"}
      >
        <DataTable />
      </Paper>
    </Stack>
  )
}
