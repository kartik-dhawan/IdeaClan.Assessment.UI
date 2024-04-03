import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material"
import PrimaryButton from "../common/PrimaryButton"
import { Link } from "react-router-dom"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { styles } from "./styles"
import { JOB_TABLE_HEAD_KEYS } from "../../utils/constants"
import { useDispatch } from "react-redux"
import { deleteAJobRecord } from "../../redux/slices/jobsSlice"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { SortDataType } from "../../utils/interfaces"
import { sortArrayOfObjects } from "../../utils/methods"

interface DataTableProps {
  jobsData: any[]
  setOpenEditDialogData: Dispatch<SetStateAction<any>>
}

export default function DataTable({
  jobsData,
  setOpenEditDialogData,
}: DataTableProps) {
  const dispatch = useDispatch()

  const [sortData, setSortData] = useState<SortDataType>({
    key: "employer_name",
    order: true,
  }) // true - asc, false - desc

  // final state for sorted data
  const [mutatedJobsData, setMutatedJobsData] = useState<any[]>([])

  // sort data before displaying on UI
  useEffect(() => {
    const arr = sortArrayOfObjects(jobsData, sortData)
    setMutatedJobsData(arr)
  }, [sortData, jobsData])

  return (
    <Paper sx={{ width: "100%", backgroundColor: "#fefefe" }}>
      <TableContainer sx={styles.dataTableContainer}>
        <Table>
          <TableHead sx={styles.dataTableHeadingCells}>
            <TableRow>
              {JOB_TABLE_HEAD_KEYS.map((item) => {
                return (
                  <TableCell
                    key={item.id}
                    onClick={() => {
                      setSortData((state) => {
                        return {
                          key: item.name,
                          order: !state.order,
                        }
                      })
                    }}
                  >
                    <TableSortLabel
                      direction={
                        sortData.key === item.name && sortData.order
                          ? "asc"
                          : "desc"
                      }
                    >
                      {item.label}
                    </TableSortLabel>
                  </TableCell>
                )
              })}
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mutatedJobsData.map((row) => {
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
                    <PrimaryButton
                      customStyles={styles.dataTableIconButtons}
                      onClick={() => {
                        setOpenEditDialogData({ open: true, row })
                      }}
                    >
                      <EditIcon />
                    </PrimaryButton>
                    <PrimaryButton
                      customStyles={styles.dataTableIconButtons}
                      onClick={() => {
                        dispatch(deleteAJobRecord(row.job_id))
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
    </Paper>
  )
}
