import { Grid } from "@mui/material";
import withAuth from "./components/requireAuth";
import Status from "./components/dashboard/main/Status";
import Sidebar from "./components/dashboard/sidebar/Sidebar";

function App() {
  return (
    <Grid sx={{ height: "100%" }} container>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10}>
        <Status />
      </Grid>
    </Grid>
  );
}

export default withAuth(App);
