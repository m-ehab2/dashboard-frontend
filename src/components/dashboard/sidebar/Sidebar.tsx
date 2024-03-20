import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "@fontsource/inria-sans/700.css";
import {
  FaBook,
  FaBullhorn,
  FaCalendarAlt,
  FaChartLine,
  FaGraduationCap,
  FaHome,
} from "react-icons/fa";
import SliderItem, { SliderItemProps } from "./SliderItem";

export default function Sidebar() {
  const navItems: SliderItemProps[] = [
    {
      icon: <FaCalendarAlt style={{ fontSize: "20px", flexShrink: 0 }} />,
      text: "Schedule",
    },
    {
      icon: <FaBook style={{ fontSize: "20px", flexShrink: 0 }} />,
      text: "Courses",
    },
    {
      icon: <FaGraduationCap style={{ fontSize: "20px", flexShrink: 0 }} />,
      text: "Gradebook",
    },
    {
      icon: <FaChartLine style={{ fontSize: "20px", flexShrink: 0 }} />,
      text: "Performance",
    },
    {
      icon: <FaBullhorn style={{ fontSize: "20px", flexShrink: 0 }} />,
      text: "Announcements",
    },
  ];
  return (
    <Box
      component={"nav"}
      sx={{
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(19,86,121,1) 0%,rgba(63,134,152,1) 100% )",
        padding: "20px 0px",
        boxShadow: "4px 0px 4px 0px rgba(0,0,0,0.25)",
      }}
    >
      <Typography
        color="white"
        fontWeight={500}
        fontSize={36}
        textAlign={"center"}
        fontFamily={"Inria Sans"}
        marginBottom={"30px"}
      >
        Coligo
      </Typography>
      <Stack gap={"10px"}>
        <Stack
          direction={"row"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={"20px"}
          sx={{
            backgroundColor: "white",
            padding: "0px 30px",
            color: "#52CAC3",
            height: "70px",
            cursor: "pointer",
          }}
        >
          <FaHome style={{ fontSize: "20px", flexShrink: 0 }} />
          <Typography fontSize={20} fontWeight={600} fontFamily={"Inter"}>
            Dashboard
          </Typography>
        </Stack>
        {navItems.map((navItem) => (
          <SliderItem
            key={navItem.text}
            icon={navItem.icon}
            text={navItem.text}
          />
        ))}
      </Stack>
    </Box>
  );
}
