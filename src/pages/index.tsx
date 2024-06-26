import { Box, Snackbar, Stack } from "@mui/material"
import CustomForm from "../components/CustomForm"
import CustomHeading from "../components/common/CustomHeading"
import PrimaryButton from "../components/common/PrimaryButton"
import { Link } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addJobRecords } from "../redux/slices/jobsSlice"
import uuid from "react-uuid"
import { styles } from "./styles"
import { URL_PATTERN } from "../utils/constants"

export default function LandingPage() {
  const dispatch = useDispatch()

  // initial state of the form - empty when adding a new record
  const initialState = {
    job_id: "",
    job_title: "",
    employer_name: "",
    job_city: "",
    job_min_salary: 0,
    job_max_salary: 0,
    job_is_remote: false,
    job_apply_link: "",
  }

  const [formData, setFormData] = useState(initialState)

  // state to manage to disable/enable of the submit button depending on form validation
  const [submitDisabled, setSubmitDisabled] = useState(false)

  // state to manage toggling of snackbar; which is shown when a new Job Record is added to redux.
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const toggleSnackbar = useCallback(() => {
    setOpenSnackbar((state) => !state)
  }, [])

  useEffect(() => {
    // form validation
    setSubmitDisabled(false)
    if (!URL_PATTERN.test(formData.job_apply_link ?? "")) {
      setSubmitDisabled(true)
    }
    if (
      formData.job_city === "" ||
      formData.job_title === "" ||
      formData.employer_name === ""
    ) {
      setSubmitDisabled(true)
    }
  }, [formData])

  return (
    <Box sx={styles.landingPageWrapper}>
      <CustomHeading
        title="Have a job to offer?"
        subtitle="Enter the job details for your hiring team to analyze and contact applicants with ease."
      />
      <Stack flexDirection="row" flexGrow={1}>
        <CustomForm formData={formData} setFormData={setFormData} />
        <Stack
          flex={1}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <PrimaryButton
            onClick={() => {
              dispatch(addJobRecords([{ ...formData, job_id: uuid() }]))
              toggleSnackbar()
              setFormData(initialState)
            }}
            disabled={submitDisabled}
          >
            Submit
          </PrimaryButton>
          <Link to="/jobs">
            <PrimaryButton>View Data</PrimaryButton>
          </Link>
        </Stack>
      </Stack>

      {/* notification that the new record has been added to the database */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={toggleSnackbar}
        message="The job has been added to the database."
      />
    </Box>
  )
}
