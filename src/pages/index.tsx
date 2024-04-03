import { Box, Stack } from "@mui/material"
import CustomForm from "../components/CustomForm"
import CustomHeading from "../components/common/CustomHeading"
import PrimaryButton from "../components/common/PrimaryButton"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <Box
      sx={{
        padding: "2rem 4rem 4rem",
        boxSizing: "border-box",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomHeading
        title="Have a job to offer?"
        subtitle="Enter the job details for your hiring team to analyze and contact applicants with ease."
      />
      <Stack flexDirection="row" flexGrow={1}>
        <CustomForm />
        <Stack
          flex={1}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <PrimaryButton>Submit</PrimaryButton>
          <Link to="/jobs">
            <PrimaryButton>View Data</PrimaryButton>
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}
