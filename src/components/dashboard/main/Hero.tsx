import { Box, Button, Typography } from "@mui/material";
import heroImage from "../../../assets/HeroImage.png";
export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        margin: "20px 20px",
        padding: "20px 30px",
        borderRadius: "10px ",
        boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.25)",
        display: "flex",
      }}
    >
      <Box
      // sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Typography
          fontFamily={"Inter"}
          fontSize={"40px"}
          fontWeight={"600"}
          color={"transparent"}
          component={"span"}
          sx={{
            background:
              "linear-gradient(90deg, rgba(19,86,121,1) 0%,rgba(63,134,152,1) 100% )",
            backgroundClip: "text",
          }}
        >
          EXAMS TIME
        </Typography>
        <Typography
          color={"#909090"}
          fontFamily={"Inter"}
          lineHeight={1.5}
          sx={{ marginBottom: "10px" }}
        >
          Here we are, Are you ready to fight? Don’t worry, we prepared some
          tips to be ready for your exams.
        </Typography>
        <Typography
          sx={{
            fontStyle: "italic",
            marginBottom: "15px ",
          }}
          color={"#909090"}
          fontFamily={"Inter"}
        >
          "Nothing happens until something moves." - Albert Einstein
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#52CAC3",
            fontSize: "20px",
            padding: "5px 30px",
            "&:hover": {
              backgroundColor: "#50B0B0",
            },
          }}
        >
          View exams tips
        </Button>
      </Box>
      <Box
        sx={{
          height: "200px",
          overflow: "hidden",
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          src={heroImage}
          sx={{ objectPosition: "center", width: "200%" }}
        />
      </Box>
    </Box>
  );
}
