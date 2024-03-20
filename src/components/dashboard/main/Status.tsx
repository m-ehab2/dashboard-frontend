import {
  Avatar,
  Badge,
  BadgeProps,
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

import profileImage from "../../../assets/marissa-lewis-47bVgRJ3bFI-unsplash.jpg";

export default function Status() {
  // Creating a custom style for my input
  const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      "& .MuiInputBase-input": {
        padding: "10px",
      },
      "& fieldset": {},
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
      },
    },
  });
  // Creating a custom style for my badge
  const StyledBadge = styled(Badge)<BadgeProps>({
    "& .MuiBadge-badge": {
      fontSize: "12px",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      lineHeight: "20px",
      textAlign: "center",
      right: "5px",
      top: "4px",
      border: "2px solid white",
      background: "#52CAC3",
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "10px 20px 10px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)",
      }}
    >
      <Typography
        fontFamily={"Inter"}
        fontSize={"36px"}
        color={"#626866"}
        fontWeight={"600"}
      >
        Welcome Talia,
      </Typography>
      <Stack direction={"row"} gap={"40px"}>
        <CssTextField
          id="input-with-icon-textfield"
          hiddenLabel
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          direction={"row"}
          gap={"25px"}
        >
          <StyledBadge badgeContent={1} color="primary">
            <FaBell
              style={{ color: "#4592A2", flexShrink: 0, fontSize: "32px" }}
            />
          </StyledBadge>
          <StyledBadge badgeContent={3} color="primary">
            <FaEnvelope
              style={{ color: "#4592A2", flexShrink: 0, fontSize: "32px" }}
            />
          </StyledBadge>
          <Avatar alt="Remy Sharp" src={profileImage} />
        </Stack>
      </Stack>
    </Box>
  );
}
