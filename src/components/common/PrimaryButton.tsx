import { Button, ButtonProps, SxProps, Theme } from "@mui/material"

interface PrimaryButtonProps extends ButtonProps {
  children: JSX.Element | string
  customStyles?: SxProps<Theme>
}

// a common reusable button component for inhouse project
export default function PrimaryButton({
  children,
  customStyles,
  ...rest
}: PrimaryButtonProps) {
  return (
    <Button
      {...rest}
      disableRipple
      sx={{
        backgroundColor: "#000",
        color: "#fefefe",
        borderRadius: "1000px",
        maxWidth: "max-content",
        fontSize: "14px",
        letterSpacing: "1px",
        padding: "8px 16px",
        fontWeight: 400,
        "&:hover": {
          backgroundColor: "#444",
        },
        "&.Mui-disabled": {
          color: "#ccc",
          backgroundColor: "#888",
        },
        ...customStyles,
      }}
    >
      {children}
    </Button>
  )
}
