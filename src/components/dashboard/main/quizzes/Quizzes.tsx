import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import OneQuiz from "./OneQuiz";
import useFetchTodos from "../../../../hooks/useFetchTodos";

export default function Quizzes() {
  const { todos, loading, error } = useFetchTodos();
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
        What's due
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
        {loading ? (
          <Box
            sx={{
              display: "flex",
              height: "100px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              sx={{ display: "flex", justifyContent: "center" }}
            />
          </Box>
        ) : error ? (
          "Error Occurred Fetching Data"
        ) : (
          todos.map((todo) => (
            <>
              <OneQuiz
                key={todo._id}
                title={todo.title}
                course={todo.course}
                topic={todo.topic}
                due={todo.due}
                status={todo.status}
                type={todo.type}
                _id={todo._id}
              />{" "}
              <Divider sx={{ margin: "10px" }} />
            </>
          ))
        )}{" "}
      </Box>
    </Box>
  );
}
