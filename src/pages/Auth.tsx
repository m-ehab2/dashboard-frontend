import { Button, Stack } from "@mui/material";
import Login from "../components/Login";
import { Link as RouterLink } from "react-router-dom";
export default function Auth() {
  return (
    <Stack
      sx={{ height: "100%" }}
      direction="row"
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
    >
      <Login />
      <Button variant="contained" component={RouterLink} to={"/dashboard"}>
        Dashboard
      </Button>
    </Stack>
  );
}
