import { Box, Button, CircularProgress, Typography } from "@mui/material";
import OneAnnouncement from "./OneAnnouncement";
import useFetchAnnouncements from "../../../../hooks/useFetchAnnouncements";

export default function Announcements() {
  const { announcements, loading, error } = useFetchAnnouncements();
  console.log("Announcements State:", announcements);
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
        fontSize={"16px"}
        color={"#626866"}
        fontWeight={"400"}
      >
        We educate warriors,stay updated!
      </Typography>
      <Box
        sx={{
          minHeight: "100px",
          maxHeight: "200px",
          overflowY: "scroll",
          paddingRight: "5px",
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
          `Error: ${error}`
        ) : announcements && announcements.length > 0 ? (
          announcements.map((item) => (
            <OneAnnouncement
              key={item._id}
              img={item.img}
              name={item.name}
              subject={item.subject}
              text={item.text}
            />
          ))
        ) : (
          "No announcements found."
        )}
      </Box>
    </Box>
  );
}
