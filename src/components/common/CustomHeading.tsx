import { Stack, Typography } from "@mui/material"
import { styles } from "../../pages/Jobs/styles"

interface CustomHeadingProps {
  title: string
  subtitle: string
}

export default function CustomHeading({ title, subtitle }: CustomHeadingProps) {
  const chid = "customHeading"

  return (
    <Stack
      alignItems="center"
      sx={styles.jobsPageHeadingContainer}
      className={chid + "HeadingContainer"}
    >
      <Typography
        component="h1"
        sx={styles.jobsPageTitle}
        className={chid + "Title"}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        sx={styles.jobsPageSubTitleText}
        className={chid + "SubTitleText"}
      >
        {subtitle}
      </Typography>
    </Stack>
  )
}
