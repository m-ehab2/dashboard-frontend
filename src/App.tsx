import { Grid } from "@mui/material";
import withAuth from "./components/requireAuth";
import Status from "./components/dashboard/main/Status";
import Sidebar from "./components/dashboard/sidebar/Sidebar";
import Hero from "./components/dashboard/main/Hero";

function App() {
  return (
    <Grid sx={{ height: "100%" }} container>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid sx={{ backgroundColor: "#F7F7F7" }} item md={10}>
        <Status />
        <Hero />
      </Grid>
    </Grid>
  );
}

export default withAuth(App);
