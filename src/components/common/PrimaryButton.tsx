import { Button, ButtonProps } from "@mui/material"

interface PrimaryButtonProps extends ButtonProps {
  children: JSX.Element | string
}

export default function PrimaryButton({
  children,
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
      }}
    >
      {children}
    </Button>
  )
}
