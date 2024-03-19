import React, { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

export interface SliderItemProps {
  icon: ReactNode;
  text: string;
}

export default function SliderItem({ icon, text }: SliderItemProps) {
  return (
    <Stack
      direction="row"
      justifyContent="start"
      alignItems="center"
      gap="20px"
      sx={{
        backgroundColor: "transparent",
        padding: "0px 30px",
        color: "white",
        height: "70px",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "white",
          color: "#52CAC3",
        },
      }}
    >
      {icon}
      <Typography fontSize={20} fontWeight={600} fontFamily="Inter">
        {text}
      </Typography>
    </Stack>
  );
}
