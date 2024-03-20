import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import OneQuiz from "./OneQuiz";

export default function Quizzes() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.25)",
        position: "relative",
      }}
    >
      <Button
        sx={{
          position: "absolute",
          color: "#52CAC3",
          right: "10px",
          fontWeight: "700",
          fontFamily: "Inter",
          textTransform: "none",
          padding: "3px",
        }}
      >
        All
      </Button>
      <Typography
        fontFamily={"Inter"}
        fontSize={"20px"}
        color={"#626866"}
        fontWeight={"600"}
      >
        Announcements
      </Typography>
      <Typography
        fontFamily={"Inter"}
        fontSize={"15px"}
        color={"#626866"}
        fontWeight={"400"}
      >
        Some times "later" becomes "never".
      </Typography>
      <Box
        sx={{
          maxHeight: "200px",
          overflowY: "scroll",
          paddingRight: "5px",
          marginTop: "10px",
        }}
      >
        <OneQuiz />
        <Divider sx={{ margin: "10px" }} />
        <OneQuiz />
        <Divider sx={{ margin: "10px" }} />
        <OneQuiz />
      </Box>
    </Box>
  );
}
