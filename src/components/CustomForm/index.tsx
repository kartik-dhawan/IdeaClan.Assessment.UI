import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material"
import { useEffect, useState } from "react"

export default function CustomForm() {
  const initialState = {
    job_id: "",
    job_title: "",
    employer_name: "",
    job_city: "",
    job_min_salary: 0,
    job_max_salary: 0,
    job_is_remote: false,
  }

  const [formData, setFormData] = useState(initialState)
  const [TAndC, setTAndC] = useState(false)
  const [hasApplicationLink, setHasApplicationLink] = useState(false)

  const setInputRecordData = (e: any, field: string) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [field]: e.target.value,
    })
  }

  useEffect(() => {
    console.log(formData)
    console.log(hasApplicationLink)
  }, [formData, hasApplicationLink])

  return (
    <Paper sx={{ width: "100%", flex: 1, padding: "2rem " }}>
      <Stack gap={2} flexDirection="row" flexWrap="wrap">
        <TextField
          label="Job Title"
          sx={{ minWidth: "400px" }}
          onChange={(e) => {
            setInputRecordData(e, "job_title")
          }}
        />
        <TextField
          label="Min. Salary"
          type="number"
          sx={{ minWidth: "300px" }}
          onChange={(e) => {
            setInputRecordData(e, "job_min_salary")
          }}
        />
        <TextField
          label="Max. Salary"
          type="number"
          sx={{ minWidth: "300px" }}
          onChange={(e) => {
            setInputRecordData(e, "job_max_salary")
          }}
        />
        <TextField
          label="City"
          sx={{ minWidth: "350px" }}
          onChange={(e) => {
            setInputRecordData(e, "job_city")
          }}
        />
        <TextField
          label="Company"
          sx={{ minWidth: "400px" }}
          onChange={(e) => {
            setInputRecordData(e, "employer_name")
          }}
        />
        <FormControl>
          <InputLabel>Got Application Link?</InputLabel>
          <Select
            label="Got Application Link?"
            sx={{ minWidth: "200px" }}
            onChange={(e) => {
              console.log(e.target.value)
              setHasApplicationLink(e.target.value == 1 ? true : false)
            }}
            defaultValue={0}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </Select>
        </FormControl>
        <RadioGroup
          defaultValue="false"
          onChange={(e) => {
            setInputRecordData(e, "job_is_remote")
          }}
        >
          <FormControlLabel value={true} control={<Radio />} label="True" />
          <FormControlLabel value={false} control={<Radio />} label="False" />
        </RadioGroup>
        <TextField
          label="Application Link"
          sx={{ minWidth: "100%" }}
          disabled={!hasApplicationLink}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="I have not entered any mis-information."
          onChange={() => {
            setTAndC(true)
          }}
          value={TAndC}
        />
      </Stack>
    </Paper>
  )
}
