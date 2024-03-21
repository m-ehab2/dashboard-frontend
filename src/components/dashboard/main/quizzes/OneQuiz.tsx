import { Box, Button, Typography } from "@mui/material";
import { FaHourglassHalf } from "react-icons/fa";
import { todoData } from "../../../../hooks/useFetchTodos";
import { TbClipboardCheck } from "react-icons/tb";
import moment from "moment";

export default function OneQuiz({ course, due, title, topic, type }: todoData) {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", margin: "5px" }}>
        {type === "exam" ? (
          <FaHourglassHalf
            style={{ color: "#52CAC3", flexShrink: 0, fontSize: "20px" }}
          />
        ) : null}
        {type === "assignment" ? (
          <TbClipboardCheck
            style={{ color: "#52CAC3", flexShrink: 0, fontSize: "25px" }}
          />
        ) : null}
        <Typography
          fontFamily={"Inter"}
          fontSize={"16px"}
          color={"#626866"}
          fontWeight={"600"}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        fontFamily={"Inter"}
        fontSize={"15px"}
        color={"#626866"}
        fontWeight={"300"}
      >
        Course : {course}
      </Typography>
      <Typography
        fontFamily={"Inter"}
        fontSize={"15px"}
        color={"#626866"}
        fontWeight={"300"}
      >
        Topic : {topic}
      </Typography>
      <Typography
        fontFamily={"Inter"}
        fontSize={"15px"}
        color={"#626866"}
        fontWeight={"300"}
      >
        Due : {moment(due).fromNow()}
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
        Start {type}
      </Button>
    </Box>
  );
}
