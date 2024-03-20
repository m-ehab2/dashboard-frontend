import { Avatar, Box, Divider, Typography } from "@mui/material";

interface OneAnnouncementProps {
  name: string;
  subject: string;
  img: string;
  text: string;
}

export default function OneAnnouncement({
  img,
  name,
  subject,
  text,
}: OneAnnouncementProps) {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "10px 0px",
        gap: "10px",
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Avatar src={img} />
        <Box sx={{ flexGrow: "1" }}>
          <Typography
            noWrap
            fontFamily={"Inter"}
            fontWeight={"600"}
            color={"#4f4f4f"}
          >
            {name}
          </Typography>
          <Typography
            noWrap
            fontFamily={"Inter"}
            fontWeight={"300"}
            color={"#7B7D7C"}
          >
            {subject}
          </Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem variant="middle" />
      <Box>
        <Typography fontFamily={"Inter"} fontWeight={"300"} color={"#7B7D7C"}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
