import { Box, Button, Typography } from "@mui/material";
import OneAnnouncement from "./OneAnnouncement";

export default function Announcements() {
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
        sx={{ maxHeight: "200px", overflowY: "scroll", paddingRight: "5px" }}
      >
        <OneAnnouncement
          img=""
          name="Muhamed Ehab"
          subject="Math 101"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        nesciunt vitae debitis quibusdam itaque maxime natus tempora blanditiis
        facilis, provident dolor cumque sunt placeat neque ex delectus
        voluptatibus, quo explicabo!"
        />
        <OneAnnouncement
          img=""
          name="Muhamed Ehab"
          subject="Math 101"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        nesciunt vitae debitis quibusdam itaque maxime natus tempora blanditiis
        facilis, provident dolor cumque sunt placeat neque ex delectus
        voluptatibus, quo explicabo!"
        />
      </Box>
    </Box>
  );
}
