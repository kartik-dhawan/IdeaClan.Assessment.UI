import {
  Paper,
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
import { styles } from "./styles"
import { JOB_TABLE_HEAD_KEYS } from "../../utils/constants"

interface DataTableProps {
  jobsData: any[]
}

export default function DataTable({ jobsData }: DataTableProps) {
  return (
    <Paper sx={{ width: "100%", backgroundColor: "#fefefe" }}>
      <TableContainer sx={{ borderRadius: "8px" }}>
        <Table>
          <TableHead sx={styles.dataTableHeadingCells}>
            {JOB_TABLE_HEAD_KEYS.map((item) => {
              return <TableCell key={item.id}>{item.label}</TableCell>
            })}
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
          </TableHead>
          <TableBody>
            {jobsData.map((row) => {
              return (
                <TableRow key={row.job_id}>
                  {JOB_TABLE_HEAD_KEYS.map((item) => {
                    return (
                      <TableCell key={item.id}>
                        {typeof row[item.name] === "boolean"
                          ? row[item.name]
                            ? "Y"
                            : "N"
                          : row[item.name]
                            ? row[item.name]
                            : "-"}
                      </TableCell>
                    )
                  })}
                  <TableCell>
                    <Link to={row.job_apply_link} target="_blank">
                      <PrimaryButton customStyles={styles.dataTableApplyBtn}>
                        Apply
                      </PrimaryButton>
                    </Link>
                  </TableCell>
                  <TableCell sx={{ display: "flex" }}>
                    <PrimaryButton customStyles={styles.dataTableIconButtons}>
                      <EditIcon />
                    </PrimaryButton>
                    <PrimaryButton customStyles={styles.dataTableIconButtons}>
                      <DeleteIcon />
                    </PrimaryButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
