import { Grid } from "@mui/material";
import withAuth from "./components/requireAuth";
import Status from "./components/dashboard/main/Status";
import Sidebar from "./components/dashboard/sidebar/Sidebar";
import Hero from "./components/dashboard/main/Hero";
import Quizzes from "./components/dashboard/main/quizzes/Quizzes";
import Announcements from "./components/dashboard/main/announcments/Announcements";

function App() {
  return (
    <Grid sx={{ height: "100%" }} container>
      <Grid item md={2} sx={{ display: { md: "block", xs: "none" } }}>
        <Sidebar />
      </Grid>
      <Grid sx={{ backgroundColor: "#F7F7F7" }} item md={10} xs={12}>
        <Status />
        <Hero />
        <Grid container sx={{ padding: "10px 20px" }} spacing={2}>
          <Grid item md={9} xs={12}>
            <Announcements />
          </Grid>
          <Grid item md={3} xs={12}>
            <Quizzes />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withAuth(App);
