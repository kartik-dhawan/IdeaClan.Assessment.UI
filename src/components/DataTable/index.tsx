import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import PrimaryButton from "../common/PrimaryButton"
import { Link } from "react-router-dom"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

interface DataTableProps {
  jobsData: any[]
}

export default function DataTable({ jobsData }: DataTableProps) {
  const tableHeadKeys = [
    {
      id: 0,
      label: "ID",
      name: "job_id",
    },
    {
      id: 1,
      label: "Job Title",
      name: "job_title",
    },
    {
      id: 2,
      label: "Company",
      name: "employer_name",
    },
    {
      id: 3,
      label: "City",
      name: "job_city",
    },
    {
      id: 4,
      label: "Min. Salary",
      name: "job_min_salary",
    },
    {
      id: 5,
      label: "Max. Salary",
      name: "job_max_salary",
    },
  ]
  console.log(tableHeadKeys)

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fefefe" }}>
      <TableContainer>
        <Table>
          <TableHead>
            {tableHeadKeys.map((item) => {
              return <TableCell key={item.id}>{item.label}</TableCell>
            })}
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
          </TableHead>
          <TableBody>
            {jobsData.map((row) => {
              return (
                <TableRow key={row.job_id}>
                  {tableHeadKeys.map((item) => {
                    return <TableCell key={item.id}>{row[item.name]}</TableCell>
                  })}
                  <TableCell>
                    <Link to={row.job_apply_link} target="_blank">
                      <PrimaryButton
                        customStyles={{
                          fontSize: "12px !important",
                          padding: "4px 8px",
                        }}
                      >
                        Apply
                      </PrimaryButton>
                    </Link>
                  </TableCell>
                  <TableCell sx={{ display: "flex" }}>
                    <PrimaryButton
                      customStyles={{
                        fontSize: "12px !important",
                        backgroundColor: "transparent",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#000",
                        },
                      }}
                    >
                      <EditIcon />
                    </PrimaryButton>
                    <PrimaryButton
                      customStyles={{
                        fontSize: "12px !important",
                        backgroundColor: "transparent",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#000",
                        },
                      }}
                    >
                      <DeleteIcon />
                    </PrimaryButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
