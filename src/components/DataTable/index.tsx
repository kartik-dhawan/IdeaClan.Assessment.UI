import { Box } from "@mui/material"

interface DataTableProps {
  jobsData: any[]
}

export default function DataTable({ jobsData }: DataTableProps) {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#fefefe" }}>
      <>Data Table</>
      {jobsData.length}
    </Box>
  )
}
