import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FaHourglassHalf } from "react-icons/fa";

export default function OneQuiz() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", margin: "5px" }}>
        <FaHourglassHalf
          style={{ color: "#52CAC3", flexShrink: 0, fontSize: "20px" }}
        />
        <Typography
          fontFamily={"Inter"}
          fontSize={"16px"}
          color={"#626866"}
          fontWeight={"600"}
        >
          Unit 2 quiz
        </Typography>
      </Box>
      <Typography
        fontFamily={"Inter"}
        fontSize={"15px"}
        color={"#626866"}
        fontWeight={"300"}
      >
        Course : Physics 02
      </Typography>
      <Typography
        fontFamily={"Inter"}
        fontSize={"15px"}
        color={"#626866"}
        fontWeight={"300"}
      >
        Topic : Unit 2:Motion and forces
      </Typography>
      <Typography
        fontFamily={"Inter"}
        fontSize={"15px"}
        color={"#626866"}
        fontWeight={"300"}
      >
        Course : Physics 02
      </Typography>
      <Button
        sx={{
          borderColor: "#52CAC3",
          borderWidth: "2px",
          color: "#52CAC3",
          "&:hover": {
            borderColor: "#52CAC3",
            borderWidth: "2px",
          },
        }}
        fullWidth
        variant="outlined"
      >
        Start Quiz
      </Button>
    </Box>
  );
}
